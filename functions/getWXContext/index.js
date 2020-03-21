/*
 * @Description:
 * @Version: 1.0
 * @Autor: yongqing
 * @Date: 2020-03-03 15:47:01
 * @LastEditors: yongqing
 * @LastEditTime: 2020-03-21 13:34:49
 */
// 云函数入口文件
// index.js
const cloud = require('wx-server-sdk')
exports.main = (event, context) => {
  // 这里获取到的 openId、 appId 和 unionId 是可信的，注意 unionId 仅在满足 unionId 获取条件时返回
  let { OPENID, APPID, UNIONID } = cloud.getWXContext()

  return {
    OPENID,
    APPID,
    UNIONID,
  }
}