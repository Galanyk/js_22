export default class LoginModel {
    constructor() {}
    isValidData = false;

    login(data) {
        //console.log('login model login')
        if (data === "123") {
            this.isValidData = true;
        } else {
            this.isValidData = false;
        }
        return this.isValidData;
    }
}