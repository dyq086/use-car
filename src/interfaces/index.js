import wepy from 'wepy'
import api from './api'
const prod = process.env.NODE_ENV === 'production'
//const prod = 'production'
const defaultHost = prod ? 'https://bcapi.haoyes.com' : 'http://localhost:7001'

const interfaces = {
    hosts() {
        return defaultHost
    },
    // 封装request
    async fetch(api, data = {}) {
        const ext = await wepy.getExtConfig()
        let host = ext.extConfig.host || defaultHost;
        let formatUrl = api.url.replace(/\{(\w*)\}/g, (result, key) => {
            return data[key] || ''
        })
        let url = host + formatUrl;

        let { auth, showLoading } = api;
        let res = await wepy.request({
            url: url,
            data: data,
            header: {},
            method: api.method,
            meta: {
                auth,
                showLoading
            }
        })

        // console.log('---返回结果-----res---', res)
        return res.data
    },
    // 登录授权 & 获取openid
    async login() {
        let wxUserInfo = {}
        let { code } = await wepy.login();
        try {
            wxUserInfo = await wepy.getUserInfo({
                withCredentials: true
            })
        } catch (e) {
            console.log(e)
        }
        let {
            encryptedData,
            iv,
            rawData,
            signature,
            userInfo
        } = wxUserInfo;
        let json_data = {
            code,
            encryptedData,
            iv
        }
        await wepy.setStorage({ key: 'userInfo', data: userInfo })
        let res = await interfaces.fetch(api.login, json_data);
        return res
    },
    // 发送短信
    async sendCode(data) {
        return await interfaces.fetch(api.sendCode, data)
    },
    //登录
    async signIn(data) {
        return await interfaces.fetch(api.signIn, data)
    },
    //添加用户信息
    async addUserInfo(data) {
        return await interfaces.fetch(api.addUserInfo, data)
    },
    //获取活动列表
    async getEvents(data) {
        return await interfaces.fetch(api.getEvents, data)
    },
    //获取列表详情
    async getEventDetail(data) {
        return await interfaces.fetch(api.getEventDetail, data)
    },
    //获取场馆
    async getVenueList(data) {
        return await interfaces.fetch(api.getVenueList, data)
    },
    //团课列表
    async getCoursesList(data) {
        return await interfaces.fetch(api.getCoursesList, data)
    },
    //团课列表详情
    async getCourseDetail(data) {
        return await interfaces.fetch(api.getCourseDetail, data)
    },
    //私教列表
    async getTrainersList(data) {
        return await interfaces.fetch(api.getTrainersList, data)
    },
    //私教详情
    async getTrainerDetail(data) {
        return await interfaces.fetch(api.getTrainerDetail, data)
    },
    //活动预约
    async eventBook(data) {
        return await interfaces.fetch(api.eventBook, data)
    },
    //私教预约
    async trainerBook(data) {
        return await interfaces.fetch(api.trainerBook, data)
    },
    //取消私教预约
    async cancelTrainerBook(data) {
        return await interfaces.fetch(api.cancelTrainerBook, data)
    },
    //获取私教类型
    async getTrainerCategorys(data) {
        return await interfaces.fetch(api.getTrainerCategorys, data)
    },
    //获取课程卡
    async getCards(data) {
        return await interfaces.fetch(api.getCards, data)
    },
    //获取课程卡详情
    async getCardDetail(data) {
        return await interfaces.fetch(api.getCardDetail, data)
    },
    //下单
    async createOrder(data) {
        return await interfaces.fetch(api.createOrder, data)
    },
    async getMyCard(data) {
        return await interfaces.fetch(api.getMyCard, data)
    },
    async eventBookCheck(data) {
        return await interfaces.fetch(api.eventBookCheck, data)
    },
    async eventBookCheckVip(data) {
        return await interfaces.fetch(api.eventBookCheckVip, data)
    },
    async orderEvent(data) {
        return await interfaces.fetch(api.orderEvent, data)
    },
    async courseBook(data) {
        return await interfaces.fetch(api.courseBook, data)
    },
    async myEventBooks(data) {
        return await interfaces.fetch(api.myEventBooks, data)
    },
    async myCourseBooks(data) {
        return await interfaces.fetch(api.myCourseBooks, data)
    },
    async myTrainerBooks(data) {
        return await interfaces.fetch(api.myTrainerBooks, data)
    },
    async myBuyCards(data) {
        return await interfaces.fetch(api.myBuyCards, data)
    },
    async buyEvents(data) {
        return await interfaces.fetch(api.buyEvents, data)
    },
    async courseBookConfirm(data) {
        return await interfaces.fetch(api.courseBookConfirm, data)
    },
    async courseBookCancel(data) {
        return await interfaces.fetch(api.courseBookCancel, data)
    },
    async trainerBookConfirm(data) {
        return await interfaces.fetch(api.trainerBookConfirm, data)
    },
    async trainerBookCancel(data) {
        return await interfaces.fetch(api.trainerBookCancel, data)
    },
    async courseBookCheck(data) {
        return await interfaces.fetch(api.courseBookCheck, data)
    },
    async trainerBookCheckCard(data) {
        return await interfaces.fetch(api.trainerBookCheckCard, data)
    },
    async trainerGetBooks(data) {
        return await interfaces.fetch(api.trainerGetBooks, data)
    },
    //判断团课详情是否符合条件的卡
    async courseBookCheckCard(data) {
        return await interfaces.fetch(api.courseBookCheckCard, data)
    },
    async getHomeVenues(data) {
        return await interfaces.fetch(api.getHomeVenues, data)
    },
    async getHomeVenuesDetail(data) {
        return await interfaces.fetch(api.getHomeVenuesDetail, data)
    },
    async getUpcoming(data) {
        return await interfaces.fetch(api.getUpcoming, data)
    },
    async sendMessage(data) {
        return await interfaces.fetch(api.sendMessage, data)
    },
    async saveFormId(data) {
        return await interfaces.fetch(api.saveFormId, data)
    },
    async checkInfo(data) {
        return await interfaces.fetch(api.checkInfo, data)
    },
    async getShareAccount(data) {
        return await interfaces.fetch(api.getShareAccount, data)
    },
    async setShareAccount(data) {
        return await interfaces.fetch(api.setShareAccount, data)
    },
    async getRegisterInfo(data) {
        return await interfaces.fetch(api.getRegisterInfo, data)
    },
    async eventBookCancel(data) {
        return await interfaces.fetch(api.eventBookCancel, data)
    },











}
export default interfaces