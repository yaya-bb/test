'use strict';

const Controller = require('egg').Controller;
const crypto = require('crypto');
class UserController extends Controller {
    // 注册
    async reg() {
        let { ctx, app } = this;
        // 参数验证
        ctx.validate({
            username: {
                type: 'string',
                required: true,
                range: {
                    min: 5,
                    max: 20
                },
                desc: '用户名'
            },
            password: {
                type: 'string',
                required: true,
                desc: '密码'
            },
            repassword: {
                type: 'string',
                required: true,
                desc: '确认密码'
            }
        }, {
            equals: [
                ['password', 'repassword']
            ]
        });
        let { username, password } = ctx.request.body;
        // 验证用户是否已经存在
        if (await app.model.User.findOne({
            where: {
                username,
            }
        })) {
            ctx.throw(400, '用户名已存在');
        }
        // 创建用户
        let user = await app.model.User.create({
            username,
            password
        });
        if (!user) {
            ctx.throw(400, '创建用户失败');
        }
        ctx.apiSuccess(user);
    }

    // 登录
    async login() {
        const { ctx, app } = this;
        // 参数验证
        ctx.validate({
            username: {
                type: 'string',
                required: true,
                desc: '用户名'
            },
            password: {
                type: 'string',
                required: true,
                desc: '密码'
            },
        });
        let { username, password } = ctx.request.body;
        // 验证该用户是否存在|验证该用户状态是否启用
        let user = await app.model.User.findOne({
            where: {
                username,
            }
        });
        if (!user) {
            ctx.throw(400, '用户不存在或已被禁用');
        }
        // 验证密码
        await this.checkPassword(password, user.password);

        user = JSON.parse(JSON.stringify(user));
        // 生成token
        let token = ctx.getToken(user);
        user.token = token;
        delete user.password;
        // 加入缓存中
        if (!await this.service.cache.set('user_' + user.id, token)) {
            ctx.throw(400, '登录失败');
        }
        // 返回用户信息和token
        return ctx.apiSuccess(user);
    }

    // 验证密码
    async checkPassword(password, hash_password) {
        // 先对需要验证的密码进行加密
        const hmac = crypto.createHash("sha256", this.app.config.crypto.secret);
        hmac.update(password);
        password = hmac.digest("hex");
        let res = password === hash_password;
        if (!res) {
            this.ctx.throw(400, '密码错误');
        }
        return true;
    }

    // 退出登录
    async logout() {
        const { ctx, service } = this;
        // 拿到当前用户id
        let current_user_id = ctx.authUser.id;
        // 移除redis当前用户信息
        if (!await service.cache.remove('user_' + current_user_id)) {
            ctx.throw(400, '退出登录失败');
        }
        ctx.apiSuccess('退出成功');
    }
    
    // 获取当前用户信息
    async info(){
        const { ctx, service, app } = this;
        let user = ctx.authUser
        return ctx.apiSuccess(JSON.parse(JSON.stringify(user)))
    }

    // // 关注
    // async follow() {
    //     const { ctx, service, app } = this;
    //     let currentUser = ctx.authUser;

    //     ctx.validate({
    //         follow_id: {
    //             type: 'int',
    //             required: true,
    //             desc: '用户ID'
    //         },
    //     });

    //     let { follow_id } = ctx.request.body;

    //     let where = {
    //         user_id: currentUser.id,
    //         follow_id
    //     }

    //     let follow = await app.model.Follow.findOne({ where });

    //     if (follow) {
    //         return ctx.apiFail('你已经关注过了');
    //     }

    //     // 用户是否存在
    //     if (!await service.user.exist(follow_id)) {
    //         return ctx.apiFail('对方不存在');
    //     }

    //     // 不能关注自己
    //     if (currentUser.id === follow_id) {
    //         return ctx.apiFail('不能关注自己');
    //     }

    //     let res = await app.model.Follow.create({ ...where });

    //     ctx.apiSuccess({
    //         status: true,
    //         msg: "关注成功"
    //     });
    // }
    // // 取消关注
    // async unfollow() {
    //     const { ctx, service, app } = this;
    //     let currentUser = ctx.authUser;

    //     ctx.validate({
    //         follow_id: {
    //             type: 'int',
    //             required: true,
    //             desc: '用户ID'
    //         },
    //     });

    //     let { follow_id } = ctx.request.body;

    //     let where = {
    //         user_id: currentUser.id,
    //         follow_id
    //     }

    //     let follow = await app.model.Follow.findOne({ where });

    //     if (!follow) {
    //         return ctx.apiFail('你还没关注对方');
    //     }

    //     let res = await follow.destroy();

    //     ctx.apiSuccess({
    //         status: false,
    //         msg: "取消关注成功"
    //     });
    // }
    // // 我的关注列表
    // async follows() {
    //     const { ctx, service, app } = this;
    //     let currentUser = ctx.authUser;

    //     let rows = await ctx.page(app.model.Follow, {
    //         user_id: currentUser.id
    //     }, {
    //         include: [{
    //             model: app.model.User,
    //             as: "user_follow",
    //             attributes: ['id', 'username', 'nickname', 'avatar']
    //         }]
    //     });

    //     rows = rows.map(item => {
    //         return {
    //             id: item.user_follow.id,
    //             name: item.user_follow.nickname || item.user_follow.username,
    //             avatar: item.user_follow.avatar
    //         }
    //     });

    //     ctx.apiSuccess(rows);
    // }
    // // 我的粉丝列表
    // async fens() {
    //     const { ctx, service, app } = this;
    //     let currentUser = ctx.authUser;

    //     let rows = await ctx.page(app.model.Follow, {
    //         follow_id: currentUser.id
    //     }, {
    //         include: [{
    //             model: app.model.User,
    //             as: "user_fen",
    //             attributes: ['id', 'username', 'nickname', 'avatar']
    //         }]
    //     });

    //     rows = rows.map(item => {
    //         return {
    //             id: item.user_fen.id,
    //             name: item.user_fen.nickname || item.user_fen.username,
    //             avatar: item.user_fen.avatar
    //         }
    //     });

    //     ctx.apiSuccess(rows);
    // }
}

module.exports = UserController;
