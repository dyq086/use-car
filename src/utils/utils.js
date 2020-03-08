/*
 * @Author: yongqing
 * @Date:   2019-03-09 16:26:25
 * @Last Modified by:   yongqing
 * @Last Modified time: 2019-05-05 18:04:38
 */

export function deepClone(obj) {
    if (Array.isArray(obj)) {
        return obj.map(deepClone)
    } else if (obj && typeof obj === 'object') {
        var cloned = {}
        var keys = Object.keys(obj)
        for (var i = 0, l = keys.length; i < l; i++) {
            var key = keys[i]
            cloned[key] = deepClone(obj[key])
        }
        return cloned
    } else {
        return obj
    }
}
/**
 * 函数防抖 (只执行最后一次点操作)
 * @param  {Function} fn    [description]
 * @param  {[type]}   delay [description]
 * @return {[type]}         [description]
 */
export const debounce = (fn, delay) => {
    let Timer = null;
    return function() {
        let args = arguments;
        if (Timer) {
            clearTimeout(Timer)
        }
        Timer = setTimeout(() => {
            fn.apply(this, args);
            Timer = null;
        }, delay)
    }
}

/**
 * 限流操作（到达规定时间点范围执行一次）
 * @param  {Function} fn           [description]
 * @param  {[type]}   delay        [description]
 * @param  {[type]}   mustRunDelay [description]
 * @return {[type]}                [description]
 */
export const throttle = (fn, delay, mustRunDelay) => {
    let StartTime = 0;
    let Timer = null;
    return function() {
        let args = arguments;
        let currentTime = +new Date();
        if (Timer) {
            clearTimeout(Timer)
        }
        if (StartTime && ((currentTime - StartTime) >= mustRunDelay)) {
            fn.apply(this, args);
            StartTime = currentTime;
        } else {
            Timer = setTimeout(() => {
                fn.apply(this, args);
                Timer = null;
                StartTime = currentTime;
            }, delay)
        }


    }
}
/**
 * 转换textarea 换行符
 * 
 * @param  {[type]} strValue [description]
 * @return {[type]}          [description]
 */
export const getFormatCode = function(strValue) {
    return strValue.replace(/\r\n/g, '<br/>').replace(/\n/g, '<br/>').replace(/\s/g, ' ');
}