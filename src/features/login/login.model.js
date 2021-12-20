export default class LoginModel {
    constructor() {}
    isValidData = false;

    login(data) {
        console.log('login model login', data)
        if (data === "123") {
            this.isValidData = true;
        } else {
            this.isValidData = false;
        }
        return this.isValidData;
    }
}