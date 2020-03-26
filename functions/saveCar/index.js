/*
 * @Description:
 * @Version: 1.0
 * @Autor: yongqing
 * @Date: 2020-03-03 16:24:55
 * @LastEditors: yongqing
 * @LastEditTime: 2020-03-23 18:34:52
 */
//index.js
// 云调用~生成小程序二维码
const cloud = require("wx-server-sdk")
cloud.init()
const db = cloud.database()
exports.main = async (event, context) => {
    try {
      
        if (event.car_id) {
            return await db
                .collection("cars")
                .doc(event.car_id)
                .update({
                    data: event
                })
        } else {
           return await db
               .collection("cars")
               .add({
                   data: event
               })
        }
    } catch (e) {
        console.error(e)
    }
}
