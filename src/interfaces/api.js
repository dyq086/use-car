/*
 * @Author: yongqing
 * @Date:   2019-07-22 15:56:57
 * @Last Modified by:   yongqing
 * @Last Modified time: 2019-09-10 23:11:31
 */

const api = {
    login: {
        url: '/api/v1/wechat/auth',
        auth: false,
        method: 'POST',
        showLoading: true
    },
    sendCode: {
        url: '/api/v1/sign/send_code',
        auth: false,
        method: 'POST',
        showLoading: true
    },
    signIn: {
        url: '/api/v1/sign/sign_in',
        auth: false,
        method: 'POST',
        showLoading: true
    },
    addUserInfo: {
        url: '/api/v1/sign/add_info',
        auth: true,
        method: 'POST',
        showLoading: true
    },
    //获取活动列表
    getEvents: {
        url: '/api/v1/events',
        auth: false,
        method: 'GET',
        showLoading: true
    },
    //活动详情
    getEventDetail: {
        url: '/api/v1/event',
        auth: false,
        method: 'GET',
        showLoading: true
    },
    //活动预约
    eventBook: {
        url: '/api/v1/event_book',
        auth: true,
        method: 'POST',
    },
    //获取场馆
    getVenueList: {
        url: '/api/v1/venues',
        auth: false,
        method: 'GET',
        showLoading: true
    },
    //获取团课列表
    getCoursesList: {
        url: '/api/v1/courses',
        auth: false,
        method: 'GET',
        showLoading: true
    },
    //获取团课详情
    getCourseDetail: {
        url: '/api/v1/course',
        auth: false,
        method: 'GET',
        showLoading: true
    },
    //获取私教列表
    getTrainersList: {
        url: '/api/v1/trainers',
        auth: false,
        method: 'GET',
        showLoading: true
    },
    //获取私教详情
    getTrainerDetail: {
        url: '/api/v1/trainer',
        auth: false,
        method: 'GET',
        showLoading: true
    },
    //私教预约
    trainerBook: {
        url: '/api/v1/trainer_book',
        auth: true,
        method: 'POST',
        showLoading: true
    },

    //取消预约
    cancelTrainerBook: {
        url: '/api/v1/trainer_book/cancel',
        auth: true,
        method: 'POST',
        showLoading: true
    },
    //获取私教类型
    getTrainerCategorys: {
        url: '/api/v1/trainer_categorys',
        auth: false,
        method: 'GET',
        showLoading: true
    },
    //获取课程卡
    getCards: {
        url: '/api/v1/cards',
        auth: true,
        method: 'GET',
        showLoading: true
    },
    //获取课程卡详情
    getCardDetail: {
        url: '/api/v1/card',
        auth: true,
        method: 'GET',
        showLoading: true
    },
    //创建订单
    createOrder: {
        url: '/api/v1/order/card',
        auth: true,
        method: 'POST',
        showLoading: true
    },
    //获取我的卡片
    getMyCard: {
        url: '/api/v1/my/cards',
        auth: true,
        method: 'GET',
        showLoading: true
    },
    // 是否已预约活动
    eventBookCheck: {
        url: '/api/v1/event_book_check',
        auth: true,
        method: 'GET',
        showLoading: true
    },
    eventBookCheckVip: {
        url: '/api/v1/event_book_check_vip',
        auth: true,
        method: 'GET',
        showLoading: true
    },
    orderEvent: {
        url: '/api/v1/order/event',
        auth: true,
        method: 'POST',
        showLoading: true
    },
    courseBook: {
        url: '/api/v1/course_book',
        auth: true,
        method: 'POST',
        showLoading: true
    },
    myEventBooks: {
        url: '/api/v1/my/event_books',
        auth: true,
        method: 'GET',
        showLoading: true
    },
    myCourseBooks: {
        url: '/api/v1/my/course_books',
        auth: true,
        method: 'GET',
        showLoading: true
    },
    myTrainerBooks: {
        url: '/api/v1/my/trainer_books',
        auth: true,
        method: 'GET',
        showLoading: true
    },
    myBuyCards: {
        url: '/api/v1/my/buy_cards',
        auth: true,
        method: 'GET',
        showLoading: true
    },
    buyEvents: {
        url: '/api/v1/my/buy_events',
        auth: true,
        method: 'GET',
        showLoading: true
    },
    courseBookConfirm: {
        url: '/api/v1/course_book_confirm',
        auth: true,
        method: 'GET',
        showLoading: true
    },
    courseBookCancel: {
        url: '/api/v1/course_book_cancel',
        auth: true,
        method: 'POST',
        showLoading: true
    },
    trainerBookConfirm: {
        url: '/api/v1/trainer_book_confirm',
        auth: true,
        method: 'GET',
        showLoading: true
    },
    trainerBookCancel: {
        url: '/api/v1/trainer_book_cancel',
        auth: true,
        method: 'POST',
        showLoading: true
    },
    courseBookCheck: {
        url: '/api/v1/course_book_check',
        auth: true,
        method: 'GET',
        showLoading: true
    },
    trainerBookCheckCard: {
        url: '/api/v1/trainer_book_check_card',
        auth: true,
        method: 'GET',
        showLoading: true
    },
    trainerGetBooks: {
        url: '/api/v1/trainer_get_books',
        auth: true,
        method: 'GET',
        showLoading: true
    },
    courseBookCheckCard: {
        url: '/api/v1/course_book_check_card',
        auth: true,
        method: 'GET',
        showLoading: true
    },
    getHomeVenues: {
        url: '/api/v1/venues_home',
        auth: false,
        method: 'GET',
        showLoading: true
    },
    getHomeVenuesDetail: {
        url: '/api/v1/venue',
        auth: false,
        method: 'GET',
        showLoading: true
    },
    getUpcoming: {
        url: '/api/v1/my/upcoming',
        auth: true,
        method: 'GET',
        showLoading: true
    },
    sendMessage: {
        url: '/api/v1/wechat/send_message_staff',
        auth: true,
        method: 'POST',
        showLoading: true
    },
    saveFormId: {
        url: '/api/v1/wechat/save_form_id',
        auth: true,
        method: 'POST',
        showLoading: true
    },
    checkInfo: {
        url: '/api/v1/sign/check_info',
        auth: true,
        method: 'GET',
        showLoading: true
    },
    getShareAccount: {
        url: '/api/v1/my/get_share_account',
        auth: true,
        method: 'GET',
        showLoading: true
    },
    setShareAccount: {
        url: '/api/v1/my/set_share_account',
        auth: true,
        method: 'POST',
        showLoading: true
    },
    getRegisterInfo: {
        url: '/api/v1/sign/get_info',
        auth: true,
        method: 'GET',
        showLoading: true
    },
     eventBookCancel: {
        url: '/api/v1/event_book_cancel',
        auth: true,
        method: 'POST',
        showLoading: true
    }



}
export default api;