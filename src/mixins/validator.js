/*
 * @Author: yongqing
 * @Date:   2019-03-02 16:33:48
 * @Last Modified by:   yongqing
 * @Last Modified time: 2019-09-01 22:34:08
 */
import wepy from 'wepy'
import * as strategys from '@/utils/validate'
export default class validatorMixin extends wepy.mixin {
    data = {
        cache: [],
        rules: {}
    }
    methods = {

    }
    onLoad() {
        let keys = Object.keys(this.rules);
        keys.forEach((key, index) => {
            this.rules[key].forEach((item) => {
                this.cache.push({
                    key: key,
                    fn: (value) => strategys[item.verify].call(null, value, item.message)
                })
            })
        })
    }
    validate(formName, fn) {
        if (typeof formName === 'string' && typeof this[formName] == 'object') {
            let result = [];
            this.cache.forEach((item, i) => {
                let value = this[formName][item.key];
                if (typeof value === 'undefined') {
                    return
                }
                let msg = item.fn(value);
                if (msg) {
                    result.push({ field: item.key, errorMsg: msg })
                }
            })
            fn.call(this, result)
        } else {
            throw new Error("validate 传入参数有误")
        }

    }
}