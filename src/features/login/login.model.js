export default class LoginModel {
    constructor() {}
    isValidData = false;

    login(name, login) {
        //console.log('login model login', name, login)
        if (true) { //name === "Sveta" && login === "123") {
            this.isValidData = true;
        } else {
            this.isValidData = false;
        }
        return this.isValidData;
    }
}