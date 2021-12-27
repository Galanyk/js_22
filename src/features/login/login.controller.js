import loginView from "./login.view";
import LoginModel from "./login.model";



export default class LoginController {
    constructor($el, options) {
        this.options = options;
        this.$container = $el;
        this.view = new loginView({ login: (name, login) => this.onLogin(name, login) });
        this.model = new LoginModel();
        // console.log("constructor Login controller");
    }

    init() {
        this.view.renderLoginForm(this.$container);
    }

    onLogin(name, login) {
        //  console.log("on login controller");
        this.options.onLogin(this.model.login(name, login));
        //his.options.onLogin();
    }
}