import loginView from "./login.view";
import LoginModel from "./login.model";



export default class LoginController {
    constructor($el, options) {
        this.options = options;
        this.$container = $el;
        this.view = new loginView({ login: (data) => this.onLogin(data) });
        this.model = new LoginModel();
        // console.log("constructor Login controller");
    }

    init() {
        this.view.renderLoginForm(this.$container);
    }

    onLogin(data) {
        //  console.log("on login controller");
        this.options.onLogin(this.model.login(data));
        //his.options.onLogin();
    }
}