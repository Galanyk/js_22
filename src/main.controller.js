import login from "./features/login/login.controller";
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
    };

    useLogin() {
        this.loginController.init();
    };

    userLogon(data) {
        if (data) {
            this.clearRoot();
            this.chatController.setConteiner(this.userController.getContainer());
            this.chatController.init();
        } else {
            alert("Invalid Name or login!!!")
        };
    };

    clearRoot() {
        this.$root.empty();
    };
}