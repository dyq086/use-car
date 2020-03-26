//index.js
// 云调用~生成小程序二维码
const cloud = require('wx-server-sdk')
cloud.init()
exports.main = async (event, context) => {
  console.log(event)
  var file_name = +new Date();
  var path = event.path;
  var width = event.width;
  try {
    // 1、通过云调用生成二维码
    const result = await cloud.openapi.wxacode.get({
      path: path,
      width: width
    })
    console.log(result)
    // 2、上传图片到云存储
    const upload = await cloud.uploadFile({
      cloudPath: file_name + '.jpg',
      fileContent: result.buffer,
    })
    console.log(upload)
    // 3、返回图片地址
    var fileID = upload.fileID;
    console.log("fileId=" + fileID);

    const fileList = [fileID]
    const imgList = await cloud.getTempFileURL({
      fileList: fileList,
    })
    return imgList.fileList
  } catch (err) {
    console.log(err)
    return err
  }
}