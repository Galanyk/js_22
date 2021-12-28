import loginView from "./login.view";
import LoginModel from "./login.model";
import ("./login.css");

export default class LoginController {
    constructor($el, options) {
        this.options = options;
        this.$container = $el;
        this.view = new loginView({ login: (name, login) => this.onLogin(name, login) });
        this.model = new LoginModel();
    };

    init() {
        this.view.renderLoginForm(this.$container);
    };

    onLogin(name, login) {
        this.options.onLogin(this.model.login(name, login));
    };
}