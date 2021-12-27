import ChatView from "./chat.view";
import ChatModel from "./chat.view";

import ("./chat.css");
export default class ChatController {

    constructor($el) {
        this.userC = null;
        this.$container = $el;
        this.view = new ChatView();
    }
    init() {
        // console.log("chat controler init");
        // this.userC = new UserController($('#main-container'))
        // console.log('co,,,', this.userC)
        // this.view.renderLayout(this.$container);
        this.view.renderChat(this.$container);
    }

    setConteiner(container) {
        // console.log("chat controller setContainer");
        this.view.setUserContainer(container);
        // this.view.createUserList(this.$container);
        //this.view.createUserList(container)

    }

    createChat() {
        // this.view.createChat();
    }
}