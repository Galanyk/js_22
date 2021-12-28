import $ from "jquery";


export default class ChatView {
    static CLASSES = {
        BUTTON_SEND_MESSAGE: 'button-send-message',
        CHAT_MESSAGES: 'chat-messages',
        CONTACT_MESSAG: 'contact-messag',
        CONTAINER_CHAT: 'container-chat',
        CONTAINER_INPUT: 'container-input',
        CONTAINER_MESSAGE: 'container-message',
        CONTAINER_MESSAGES: 'container-messages',
        CONTAINER_USERS: 'container-users',
        INPUT_MESSAGE: 'input-message',
        ITEM_MESSAGE: 'item-message',
        ITEM_USER_CHAT: 'item-user-chat',
        LIST_CHAT: 'list',
        MESSAGE_DATE: 'message-date',
        SEND_NAME: 'sender-name',
        USER_MESAGE: 'user-messag',
    }

    constructor(options) {
        this.options = options;
    };

    message = {
        userId: null,
        name: null,
        text: null,
        date: null,
        chatId: null,
    };

    id = 0;
    // $userList = null;
    displaySideClassName = null;
    direction = 0;

    setUserContainer(container) {
        this.userContainer = container;
    };

    createUser(user, id) {
        return `<li id="${id}" class="${ChatView.CLASSES.ITEM_USER_CHAT}">${user}</li>`
    };

    renderChat($contrainer) {
        $contrainer.append(this.createChat())
            .on('click', `.${ChatView.CLASSES.BUTTON_SEND_MESSAGE}`, () => this.onSendMessage())
            .on('click', `.${ChatView.CLASSES.ITEM_USER_CHAT}`, (e) => this.onUserClick(e))
        this.createUserList();
    };

    createUserList() {
        this.userContainer.forEach(element => {
            $('.list').append(this.createUser(element.name, element.id));
        });
    };

    createChat() {
        return $(`<div class="${ChatView.CLASSES.CONTAINER_CHAT}">
        <div class="${ChatView.CLASSES.CONTAINER_USERS}">
        <div class="text-msg">Click on contact and write a message</div>
            <ul class="${ChatView.CLASSES.LIST_CHAT}">
            </ul>
        </div>
        <div class="${ChatView.CLASSES.CONTAINER_MESSAGES}">
            <div class="${ChatView.CLASSES.CHAT_MESSAGES}">
                <div class="${ChatView.CLASSES.USER_MESAGE}"></div>
                <div class="${ChatView.CLASSES.CONTACT_MESSAG}"></div>
            </div>
            <div class="${ChatView.CLASSES.CONTAINER_INPUT}">
                <input type="text" class="${ChatView.CLASSES.INPUT_MESSAGE}">
                <button class="${ChatView.CLASSES.BUTTON_SEND_MESSAGE}">Send</button>
            </div>
        </div>
    </div>`);
    };

    onSendMessage() {
        if (this.message.name !== null && this.getMessage().text !== '') {
            $(`.${ChatView.CLASSES.CONTACT_MESSAG}`).append(this.createMessage(this.getMessage()));
            $(`.${ChatView.CLASSES.INPUT_MESSAGE}`).val('');
            this.options.sendMessages(this.message.text);
        };
    };

    getMessage() {
        this.message.text = $(`.${ChatView.CLASSES.INPUT_MESSAGE}`).val()
        this.message.date = new Date().toLocaleTimeString();
        return this.message;
    };

    createMessage(message) {
        this.direction = Math.random() > 0.5;
        this.direction > 0.5 ? this.displaySideClassName = 'left' : this.displaySideClassName = 'right';
        return `<div class="${ChatView.CLASSES.CONTAINER_MESSAGE} ${this.displaySideClassName}">
                    <div class="${ChatView.CLASSES.SEND_NAME}">${message.name}</div>
                    <div class="${ChatView.CLASSES.ITEM_MESSAGE}">${message.text}</div>
                    <div class="${ChatView.CLASSES.MESSAGE_DATE}">${message.date}</div>
                </div>`
    };

    createReturnMessage(message) {
        this.direction > 0.5 ? this.displaySideClassName = 'right' : this.displaySideClassName = 'left';
        $(`.${ChatView.CLASSES.CONTACT_MESSAG}`).append(`<div class="${ChatView.CLASSES.CONTAINER_MESSAGE} ${this.displaySideClassName}">
                    <div class="${ChatView.CLASSES.SEND_NAME}">${this.userContainer[Math.floor(Math.random() * 10)].name}</div>
                    <div class="${ChatView.CLASSES.ITEM_MESSAGE}">${message}</div>
                    <div class="${ChatView.CLASSES.MESSAGE_DATE}">${new Date().toLocaleTimeString()}</div>
                </div>`);
    };

    onUserClick(e) {
        this.message.name = this.userContainer.filter((element) => {
            return element.id === +e.target.id
        })[0].name
    };
}