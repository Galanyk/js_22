export default class LoginModel {
    constructor() {}
    isValidData = false;

    login(name, login) {
        if (name === "Sveta" && login === "123") {
            this.isValidData = true;
        } else {
            this.isValidData = false;
        }
        return this.isValidData;
    };
}