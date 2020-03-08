/*
 * @Author: yongqing
 * @Date:   2019-09-01 22:27:42
 * @Last Modified by:   yongqing
 * @Last Modified time: 2019-09-01 22:54:28
 */

import wepy from 'wepy'
import interfaces from '@/interfaces/index'

export default class checkInfoMixins extends wepy.mixin {
    data = {

    }
    methods = {

    }

    async validateOptimize() {
        let token = wepy.getStorageSync('token');
        if (token) {
            let res = await interfaces.checkInfo();
            if (res.data.isNew) {
                wepy.navigateTo({
                    url: '/pages/user/register'
                });
            }

        }

    }
}