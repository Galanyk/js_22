import ChatView from "./chat.view";
import ChatModel from "./chat.model";

import ("./chat.css");
export default class ChatController {

    constructor($el) {
        this.userC = null;
        this.$container = $el;
        this.view = new ChatView({
            sendMessages: (message) => this.sendMessage(message)
        });
        this.model = new ChatModel({
            sendAnswers: (message) => this.getAnswer(message)
        });
    }

    init() {
        this.view.renderChat(this.$container);
    }

    setConteiner(container) {
        this.view.setUserContainer(container);
    }

    sendMessage(message) {
        this.model.sendMessage(message);
    }

    getAnswer(message) {
        this.view.createReturnMessage(message);
    }
}