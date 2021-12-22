import ChatView from "./chat.view";
import ChatModel from "./chat.view";

import ("./chat.css");
export default class ChatController {

    // static API = "https://jsonplaceholder.typicode.com";
    // static ENVIRONMENT = {
    //     USERS: {
    //         getUsers: "/users",
    //     },
    // };

    constructor($el) {
        this.userC = null;
        this.$container = $el;
        this.view = new ChatView();
        this.view.createChat();
        // this.createUserList(userContainer)
        // 
        // this.chatModel = new ChatModel("https://jsonplaceholder.typicode.com");
        // this.chatModel.getListItems().then(() => this.initViewRender());
        // this.createUserList(userContainer)

        // this.init();
    }
    init() {
        this.view.renderChat(this.$container);
        this.userC = new UserController($('#main-container'))
        console.log('co,,,', this.userC)
        this.userC.initViewRender();
        this.createUserList(userContainer)
        console.log('co,,,v', this.createUserList(userContainer))

    }

    setConteiner(container) {
        console.log("chatController.setContainer")
        this.view.setUserContainer(container);
        this.view.createUserList(this.$container);
    }
}