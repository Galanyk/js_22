import login from "./features/login/login.controller";
import layout from "./core/layout/layout.controller";
import chat from "./core/chat/chat.controller";
import user from "./features/user/user.controller";


export default class MainController {
    constructor($el) {
        this.$root = $el;
        this.loginController = new login(this.$root, {
            onLogin: (data) => this.userLogon(data),
        });
        this.chatController = new chat(this.$root);
        this.userController = new user(this.$root);
        this.useLogin();
    }

    useLogin() {
        console.log("main controller useLogin");
        this.loginController.init();
    }

    userLogon(data) {
        if (data) {
            console.log("Log in");
            this.clearRoot();
            this.chatController.setConteiner(this.userController.getContainer());
            this.chatController.init();
        } else {
            alert("Invalid login or password!!!")
        }

    }

    clearRoot() {
        this.$root.empty();
    }
}