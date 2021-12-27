import $ from "jquery";


export default class ChatView {
    static CONTAINER_CHAT = 'container-chat'

    constructor(options) {
        this.options = options;
    };

    message = {
        userId: null,
        name: null,
        text: null,
        date: null,
        isShown: null,
        isEdited: null,
        chatId: null,
    }

    id = 0;
    $userList = null;

    setUserContainer(container) {
        this.userContainer = container;
    }

    createUser(user, id) {
        console.log('id,', id, user)
        return `<li id="${id}" class="item-user-chat">${user}</li>`
    }


    renderChat($contrainer) {
        $contrainer.append(this.createChat())
            .on('click', ".button-send-message", () => this.onSendMessage())
            .on('click', ".item-user-chat", (e) => this.onUserClick(e))
        this.createUserList();
    };
    createUserList() {
        this.userContainer.forEach(element => {
            $('.list').append(this.createUser(element.name, element.id));
        });
    }
    createChat() {
        return $(`<div class="container-chat">
        <div class="container-users">
            <ul class="list">
            </ul>
        </div>
        <div class="container-messages">
            <div class="chat-messages">
                <div class="user-messag"></div>
                <div class="contact-messag"></div>
            </div>
            <div class="container-input">
                <input type="text" class="input-message">
                <button class="button-send-message">Send</button>
            </div>
        </div>
    </div>`);
    };

    onSendMessage() {
        if (this.message.name !== null && this.getMessage().text !== '') {
            console.log('get messege: ', this.getMessage().text);
            $('.contact-messag').append(this.createMessage(this.getMessage()));
            $(".input-message").val('');
        }
    }

    getMessage() {
        this.message.text = $(".input-message").val()
        this.message.date = new Date().toLocaleTimeString();
        return this.message;
    }

    createMessage(message) {
        return `<div class="container-message">
                    <div class="sender-name">${message.name}</div>
                    <div class="item-message">${message.text}</div>
                    <div class="msg-date">${message.date}</div>
                </div>`
    }

    onUserClick(e) {
        console.log("user click: ", e.target.id);
        this.message.name = this.userContainer.filter((element) => {
            return element.id === +e.target.id
        })[0].name
    }
}