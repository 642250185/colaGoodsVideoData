const path = require('path');

const config = {
    mongodb: {
        host: '10.0.10.230',
        port: 27017,
        dbname: 'colaGoods'
    },
    tikTok: {
        domain: 'https://aweme.snssdk.com',
        postRoute: '/aweme/v1/aweme/post/',
        followRoute: '/aweme/v1/user/following/list/',
        followCountRoute: 'https://api-eagle.amemv.com/aweme/v1/user/',
        postDataPath: path.join(__dirname, '..', 'data/tikTokPost.json')
    },
    bilibili: {
        domain: 'https://api.vc.bilibili.com',
        postRoute: '/dynamic_svr/v1/dynamic_svr/space_history',
        postDataPath: path.join(__dirname, '..', 'data/bilibiliPost.json')
    },
    budejie: {
        domain: 'http://d.api.budejie.com',
        userInfoRoute: '/user/info',
        postRoute: '/topic/my-topic/budejie-android-7.0.8/',
        postDataPath: path.join(__dirname, '..', 'data/budejiePost.json')
    },
    sohu: {
        domain: 'https://mp.sohu.com',
        postRoute: '/v3/users/news/',
        postDataPath: path.join(__dirname, '..', 'data/sohuPost.json')
    },
    gifShow: {

    },
    env: function () {
        global.$config = this;
        return global.$config;
    }
};


module.exports = config.env();