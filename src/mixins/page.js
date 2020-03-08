/*
 * @Author: yongqing
 * @Date:   2019-02-27 15:05:23
 * @Last Modified by:   yongqing
 * @Last Modified time: 2019-04-01 23:15:58
 */

import wepy from 'wepy'
import interfaces from '@/interfaces/index'
export default class pageMixin extends wepy.mixin {
    data = {
        loading: false,
        listData: [],
        page: 1,
        page_size: 10,
        nodata: false,
        nomore: false,
        api: {},
        params: {},
        filters: {},
        searchKey: '',
        time: 300,
        total: 0,
        current:0
    }
    methods = {

    }

    async init(clearable = false) {
        if (!await this.beforeInit()) {
            return
        }

        if (clearable) {
            this.listData = [];
            this.$apply();
        }

        let filters = this.filters;

        let tempObject = {};
        Object.keys(filters).map((key) => {
            let value = filters[key];
            if (value !== '' && value !== undefined) {
                tempObject[key] = [value]
            }
        })

        if (Object.keys(tempObject).length > 0) {
            this.params['filters'] = tempObject;
        }
        return new Promise((resolve, reject) => {
            interfaces.fetch(this.api, this.params).then(res => {
                this.loading = false;
                let { records, total } = res.data;
                this.nodata = false;
                if (total == 0) {
                    //this.listData = []
                    this.nodata = true;
                }
                if (this.page <= total) {
                    this.listData = [...this.listData, ...records]
                }
                if (records.length !== this.page_size) {
                    this.nomore = true;
                }
                this.total = total;
                setTimeout(() => {
                    this.loading = false;
                    this.$apply();
                }, this.time)
                resolve(res)
            }).catch(err => {
                this.loading = false
                reject(err)
            })
        })
    }
    beforeInit() {
        return true
    }
    /**
     * 下拉刷新
     * @return {[type]} [description]
     */
    async onPullDownRefresh(obj = {}) {
        this.page = 1;
        this.nomore = false;
        this.listData = [];
        if (this.loading) {
            return false
        }
        this.loading = true;
        wepy.showNavigationBarLoading() //在标题栏中显示加载
        await this.init();
        this.loading = false;
        wepy.hideNavigationBarLoading() //完成停止加载
        wepy.stopPullDownRefresh() //停止下拉刷新
        obj.detail && (obj.detail.success())
        this.$apply();
    }
    /**
     * 加载更多
     * @return {[type]} [description]
     */
    async onReachBottom(obj = {}) {
        if (this.nomore) {
            return false
        }
        if (this.loading) {
            return false
        }
        this.loading = true;
        this.page++;
        await this.init();
        this.loading = false;
        obj.detail && (obj.detail.success())
        this.$apply();

    }

    onShow() {

    }

    onLoad() {

    }
}