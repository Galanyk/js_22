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
        this.layoutController = new layout(this.$root);
        this.chatController = new chat(this.$root);
        this.userController = new user(this.$root);
        this.useLogin();
    }

    useLogin() {
        console.log("main controller user login");
        this.loginController.init();
    }

    userLogon(data) {
        console.log("main controller user logon");
        console.log("data: ", data);
        if (data) {
            this.chatController.setConteiner(this.userController.getContainer());
            this.clearRoot();
            this.layoutController.init();
        } else {
            alert("Invalid login or password!!!")
        }

    }


    clearRoot() {
            this.$root.empty();
        }
        // useLayout() {
        //     this.Controller();
        // }
}