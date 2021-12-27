export default class ChatModel {
    constructor(options) {
        this.options = options;
    }

    sendMessage(message) {
        this.sendAnswer("Hello")
    }

    sendAnswer(message) {
        setTimeout(() => { this.options.sendAnswers(message) }, 1000);
    }
}