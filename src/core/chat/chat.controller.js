import ChatView from "./chat.view";

import ("./chat.css");
export default class ChatController {
    constructor($el) {
        this.userC = null;
        this.$container = $el;
        this.view = new ChatView();
        this.view.createChat();

        // this.init();
    }

    init() {
        this.view.renderChat(this.$container);
        this.userC = new TodoListController($('#main-container'))
        console.log('co,,,', this.userC)
        this.userC.initViewRender();
    }

    setConteiner(container) {
        console.log("chatController.setContainer")
        this.view.setUserContainer(container);
        this.view.createUserList(this.$container);
    }
}