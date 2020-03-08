import wepy from 'wepy'

export default class inputMixin extends wepy.mixin {
    data = {

    }
    methods = {
        formInput(e) {
            let key = e.currentTarget.dataset.prop;
            this.form[key] = e.detail;
            this.$apply();
        }
    }

    onShow() {

    }

    onLoad() {

    }
}