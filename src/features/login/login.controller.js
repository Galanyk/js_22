import loginView from "./login.view";
import LoginModel from "./login.model";



export default class LoginController {
    constructor($el, options) {
        this.options = options;
        this.$container = $el;
        this.view = new loginView({ login: () => this.onLogin() });
        this.loginModel = new LoginModel
        console.log("constructor Login controller");
    }

    init() {
        this.view.renderLoginForm(this.$container);
    }
    onLogin() {
        console.log("Login controller");
        console.log("options: ", this.options);
        this.options.onLogin();
        this.loginModel.login("123")

    }

}