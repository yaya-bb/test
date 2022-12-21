'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
 
module.exports = app => {
  const { router, controller, io } = app;
  // 用户注册
  router.post('/api/reg', controller.api.user.reg);
  // 用户登录
  router.post('/api/login', controller.api.user.login);
  // 退出登录
  router.post('/api/logout', controller.api.user.logout);

  // 创建直播间
  router.post('/api/live/create', controller.api.live.save);
  // 直播间列表
  router.get('/api/live/list/:page', controller.api.live.list);
  // 查看直播间
  router.get('/api/live/read/:id', controller.api.live.read);
  // 修改直播间状态
  router.post('/api/live/changestatus', controller.api.live.changestatus);

  router.post('/api/gift/wxpay', controller.api.gift.wxpay);
  
  router.post('/api/gift/notify' ,app.middleware.tenpay('pay', app),controller.api.gift.notify);

  router.get('/api/gift/list', controller.api.gift.list);
  router.get('/api/user/info', controller.api.user.info);


  io.of('/').route('comment', io.controller.nsp.comment);
  io.of('/').route('joinLive', io.controller.nsp.joinLive);
  io.of('/').route('leaveLive', io.controller.nsp.leaveLive);
  io.of('/').route('gift', io.controller.nsp.gift);

  // 后台相关
  router.get('/admin', controller.admin.home.index);
  router.get('/admin/login', controller.admin.home.login);
  router.get('/admin/logout', controller.admin.home.logout);
  router.post('/admin/loginevent', controller.admin.home.loginevent);

  router.get('/admin/manager', controller.admin.manager.index);
  router.get('/admin/manager/create', controller.admin.manager.create);
  router.post('/admin/manager', controller.admin.manager.save);
  router.get('/admin/manager/edit/:id', controller.admin.manager.edit);
  router.get('/admin/manager/delete/:id', controller.admin.manager.delete);
  router.post('/admin/manager/:id', controller.admin.manager.update);

  router.get('/admin/user', controller.admin.user.index);
  router.get('/admin/user/create', controller.admin.user.create);
  router.post('/admin/user', controller.admin.user.save);
  router.get('/admin/user/edit/:id', controller.admin.user.edit);
  router.get('/admin/user/delete/:id', controller.admin.user.delete);
  router.post('/admin/user/:id', controller.admin.user.update);

  router.post('/admin/upload', controller.admin.common.upload);

  router.get('/admin/gift', controller.admin.gift.index);
  router.get('/admin/gift/create', controller.admin.gift.create);
  router.post('/admin/gift', controller.admin.gift.save);
  router.get('/admin/gift/edit/:id', controller.admin.gift.edit);
  router.get('/admin/gift/delete/:id', controller.admin.gift.delete);
  router.post('/admin/gift/:id', controller.admin.gift.update);

  router.get('/admin/live', controller.admin.live.index);
  router.get('/admin/live/look/:id', controller.admin.live.look);
  router.get('/admin/live/gift/:id', controller.admin.live.gift);
  router.get('/admin/live/comment/:id', controller.admin.live.comment);
  router.get('/admin/live/close/:id', controller.admin.live.closelive);
  
  router.get('/admin/order', controller.admin.order.index);
  router.get('/admin/order/delete/:id', controller.admin.order.delete);
};
