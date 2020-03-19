import wepy from "wepy"

export default class testMixin extends wepy.mixin {
    data = {
        mixin: "This is mixin data."
    }
    methods = {
        tap() {
            this.mixin = "mixin data was changed"
            console.log("mixin method tap")
             this.form = {
                 banner_img: [
                     {
                         url: "cloud://test-bahcg.7465-test-bahcg-1301487818/1712c91fb1f564f4b79433a3949dd64c",
                         name: "1712c91fb1f564f4b79433a3949dd64c",
                         isImage: true
                     },
                     {
                         url: "cloud://test-bahcg.7465-test-bahcg-1301487818/e9ecf64e2719e4a4d5bd0754cdffb7b2",
                         name: "e9ecf64e2719e4a4d5bd0754cdffb7b2",
                         isImage: true
                     }
                 ],
                 car_name: "丰田 凯美瑞 2018款 2.0G 豪华版",
                 price: 16,
                 vip_price: 15.8,
                 mileage: "2018年/3.3万公里",
                 phone_num: "18000000000",
                 tags: [
                     {
                         _id: "1583657699100_0.6465831263854709_33613829",
                         _openid: "oFzn_46Sv9q6ttxxQC4jgDZvKa4I",
                         is_deleted: false,
                         name: "降价急售",
                         selected: true
                     },
                     {
                         _id: "1583657705507_0.5170593567207835_33588088",
                         _openid: "oFzn_46Sv9q6ttxxQC4jgDZvKa4I",
                         is_deleted: false,
                         name: "0过户",
                         selected: true
                     }
                 ],
                 car_tags: [
                     {
                         _id: "1583657609368_0.2765039700282017_33600803",
                         _openid: "oFzn_46Sv9q6ttxxQC4jgDZvKa4I",
                         is_deleted: false,
                         name: "LED",
                         selected: true
                     },
                     {
                         _id: "1583657651917_0.340655167060649_33578144",
                         _openid: "oFzn_46Sv9q6ttxxQC4jgDZvKa4I",
                         is_deleted: false,
                         name: "真皮座椅",
                         selected: true
                     },
                     {
                         _id: "1583657662246_0.10143075039382055_33612548",
                         _openid: "oFzn_46Sv9q6ttxxQC4jgDZvKa4I",
                         is_deleted: false,
                         name: "全景天窗",
                         selected: true
                     }
                 ],
                 service_img: [
                     {
                         url: "cloud://test-bahcg.7465-test-bahcg-1301487818/7e35dc661e1e1d9d16f200321a0dbb7f",
                         name: "7e35dc661e1e1d9d16f200321a0dbb7f",
                         isImage: true
                     }
                 ],
                 base: [
                     {
                         name: "表显里程",
                         value: "3.54万公里"
                     },
                     {
                         name: "变速箱",
                         value: "自动"
                     },
                     {
                         name: "排量",
                         value: "2.0L"
                     },
                     {
                         name: "上牌时间",
                         value: "2018-05"
                     },
                     {
                         name: "新车含税价",
                         value: "21.70万"
                     },
                     {
                         name: "车源编号",
                         value: "10001"
                     }
                 ],
                 detail_accident: [
                     {
                         url: "cloud://test-bahcg.7465-test-bahcg-1301487818/220c48d336e6f04364a7b04fa41e2ad7",
                         name: "220c48d336e6f04364a7b04fa41e2ad7",
                         isImage: true
                     }
                 ],
                 detail_underpan: [
                     {
                         url: "cloud://test-bahcg.7465-test-bahcg-1301487818/9b71b3d52ab236c0b8620d02448b7f7f",
                         name: "9b71b3d52ab236c0b8620d02448b7f7f",
                         isImage: true
                     }
                 ],
                 detail_slight: [
                     {
                         url: "cloud://test-bahcg.7465-test-bahcg-1301487818/d937720e56914c5573a76d63bb2e53a4",
                         name: "d937720e56914c5573a76d63bb2e53a4",
                         isImage: true
                     }
                 ],
                 detail_easyWear: [
                     {
                         url: "cloud://test-bahcg.7465-test-bahcg-1301487818/26aa04a73a4ad1ed4fa54bc353767822",
                         name: "26aa04a73a4ad1ed4fa54bc353767822",
                         isImage: true
                     }
                 ],
                 detail_function: [
                     {
                         url: "cloud://test-bahcg.7465-test-bahcg-1301487818/d96395048203f2e0df4a6e0eb41f1bac",
                         name: "d96395048203f2e0df4a6e0eb41f1bac",
                         isImage: true
                     }
                 ],
                 detail_start: [
                     {
                         url: "cloud://test-bahcg.7465-test-bahcg-1301487818/8a8d968046e51d9ee06eb552b69f929e",
                         name: "8a8d968046e51d9ee06eb552b69f929e",
                         isImage: true
                     }
                 ],
                 detail_surface: [
                     {
                         url: "cloud://test-bahcg.7465-test-bahcg-1301487818/5207c0c2ef59e8500debf961e52b636b",
                         name: "5207c0c2ef59e8500debf961e52b636b",
                         isImage: true
                     }
                 ],
                 is_deleted: false
             }
        }
    }

    onShow() {
        console.log("mixin onShow")
    }

    onLoad() {
        console.log("mixin onLoad")
    }
}
