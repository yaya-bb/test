module.exports = app => {
    const { STRING, INTEGER, DATE, ENUM, TEXT } = app.Sequelize;

    const Gift = app.model.define('gift', {
        // 礼物id
        id: {
            type: INTEGER(20),
            primaryKey: true,
            autoIncrement: true
        },
        // 礼物名字
        name: {
            type: STRING,
            allowNull: false,
            defaultValue: '',
            comment: '礼物名称'
        },
        // 礼物图片
        image: {
            type: STRING,
            allowNull: true,
            defaultValue: '',
            comment: '礼物图标',
            get(){
                const ctx = app.createAnonymousContext();
                let url = this.getDataValue('image')
                url = app.config.webUrl + url
                return url
            }
        },
        // 礼物金额
        coin: {
            type: INTEGER,
            allowNull: false,
            defaultValue: 0,
            comment: '金币'
        },
        created_time: DATE,
        updated_time: DATE,

    });

    return Gift;
};