/*
 * @Author: yongqing
 * @Date:   2019-03-02 15:35:18
 * @Last Modified by:   yongqing
 * @Last Modified time: 2019-03-04 11:31:06
 */


/**
 * 验证是否为空
 * @param  {[type]}  value    [description]
 * @param  {[type]}  errorMsg [description]
 * @return {Boolean}          [description]
 */
export function isNotEmpty(value, errorMsg) {
    if (typeof value == "undefined" || value == null || value == '') return errorMsg;
}

/**
 * 验证是否为手机号码
 * @param  {[type]} value    [description]
 * @param  {[type]} errorMsg [description]
 * @return {[type]}          [description]
 */
export function mobileFormat(value, errorMsg) {
    if (!/(^1[3|5|8][0-9]{9}$)/.test(value)) return errorMsg;
}