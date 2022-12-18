'use strict';

const Controller = require('egg').Controller;
// let demo = [{
//     id: 1,
//     username: "用户名1",
//     nickname: "昵称",
//     sex: "男"
// }, {
//     id: 2,
//     username: "用户名2",
//     nickname: "昵称",
//     sex: "男"
// }, {
//     id: 3,
//     username: "用户名3",
//     nickname: "昵称",
//     sex: "男"
// }, {
//     id: 4,
//     username: "用户名4",
//     nickname: "昵称",
//     sex: "男"
// }];
class UserController extends Controller {
    // 用户列表
    async index() {
        // 拿到数据
        let result = [];
        // 验证用户登录状态
        this.ctx.throw(500, '出错');
        // 页数
        let page = this.ctx.query.page ? parseInt(this.ctx.query.page) : 1;
        // 限制个数
        let limit = 5;
        // 偏移量
        let offset = (page - 1) * 5;
        // 查询多个
        let Op = this.app.Sequelize.Op;
        result = await this.app.model.User.findAll({
            where: {
                // sex: "男",
                // username: {
                //     [Op.like]: "%用户%"
                // },
                // id: {
                //     [Op.gt]: 6
                // }
            },
            // attributes: ['id', 'username', 'sex'],
            attributes: {
                // 排除
                exclude: ['password']
            },
            // 排序
            order: [
                ['updated_at', 'DESC'],
                ['id', 'DESC'],
            ],
            offset,
            limit
        });
        // 查询多个并计数
        // result = await this.app.model.User.findAndCountAll();

        // 获取url的问号get传值参数
        // this.ctx.query.page;
        // 响应
        this.ctx.body = {
            msg: 'ok',
            data: result
        };
        // 修改状态码
        // this.ctx.status = 200;
    }
    // 读取某个用户数据
    async read() {
        let id = parseInt(this.ctx.params.id);
        //let detail = demo.find(item => item.id == id);

        // 通过主键查询单个数据
        // let detail = await this.app.model.User.findByPk(id);
        // if (!detail) {
        //     return this.ctx.body = {
        //         msg: "fail",
        //         data: "用户不存在"
        //     }
        // }
        // 查询单个
        let detail = await this.app.model.User.findOne({
            where: {
                id,
                sex: "男"
            }
        });
        this.ctx.body = {
            msg: 'ok',
            data: detail
        };
    }

    // 创建用户
    async create() {
        // 参数验证
        // 写入数据库
        // this.ctx.throw(500, '故意出错');
        // 新增单个
        let params = this.ctx.request.body;
        // 参数验证
        this.ctx.validate({
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
            sex: {
                type: 'string',
                required: false,
                defValue: '男',
                desc: '性别'
            }
        });
        // 写入数据库
        let res = await this.app.model.User.create(params);

        // 批量新增
        // let res = await this.app.model.User.bulkCreate([
        //     {
        //         username: "用户11",
        //         password: "密码1",
        //         sex: "男"
        //     },
        //     {
        //         username: "用户12",
        //         password: "密码2",
        //         sex: "男"
        //     },
        //     {
        //         username: "用户13",
        //         password: "密码3",
        //         sex: "男"
        //     },
        //     {
        //         username: "用户14",
        //         password: "密码4",
        //         sex: "男"
        //     },
        //     {
        //         username: "用户15",
        //         password: "密码5",
        //         sex: "男"
        //     },
        //     {
        //         username: "用户16",
        //         password: "密码6",
        //         sex: "男"
        //     }
        // ]);

        // 成功
        this.ctx.body = res;
    }
    async update() {
        let id = this.ctx.params.id ? parseInt(this.ctx.params.id) : 0;
        // 拿到这条记录
        let data = await this.app.model.User.findByPk(id);
        if (!data) {
            return this.ctx.body = {
                msg: "fail",
                data: "该记录不存在"
            }
        }
        // 修改记录
        // data.username = '被修改了';

        // data.sex = '男';

        // let res = await data.save({
        //     fields: ['username']
        // });
        // 拿到数据
        let params = this.ctx.request.body;
        let res = await data.update(params, {
            fields: ['username']
        });

        this.ctx.body = {
            msg: "ok",
            data: res
        }
    }
    async destroy() {
        // let id = this.ctx.params.id ? parseInt(this.ctx.params.id) : 0;
        // let data = await this.app.model.User.findByPk(id);
        // if (!data) {
        //     return this.ctx.body = {
        //         msg: "fail",
        //         data: "该记录不存在"
        //     };
        // }
        // let res = await data.destroy();
        // this.ctx.body = {
        //     msg: "ok",
        //     data: res
        // };
        let Op = this.app.model.Sequelize.Op;
        let res = await this.app.model.User.destroy({
            where: {
                id: {
                    [Op.lte]: 24
                }
            }
        });
        this.ctx.body = {
            msg: "ok",
            data: res
        };
    }
}

module.exports = UserController;
