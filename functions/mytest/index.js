/*
 * @Description:
 * @Version: 1.0
 * @Autor: yongqing
 * @Date: 2020-03-03 15:47:01
 * @LastEditors: yongqing
 * @LastEditTime: 2020-03-03 15:57:33
 */
// 云函数入口文件
const cloud = require("wx-server-sdk")

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
    const { OPENID, APPID, UNIONID } = cloud.getWXContext()
    return {
        a: 1
    }
}
