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
        chatId: null,
    }

    id = 0;
    $userList = null;
    displaySideClassName = null;
    direction = 0;

    setUserContainer(container) {
        this.userContainer = container;
    }

    createUser(user, id) {
        //  console.log('id,', id, user)
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
            // console.log('get messege: ', this.getMessage().text);
            $('.contact-messag').append(this.createMessage(this.getMessage()));
            $(".input-message").val('');
            this.options.sendMessages(this.message.text)
                // setTimeout(() => {
                //     $('.contact-messag').append(this.createReturnMessage())
                // }, 1000)
        }
    }

    getMessage() {
        this.message.text = $(".input-message").val()
        this.message.date = new Date().toLocaleTimeString();
        return this.message;
    }

    createMessage(message) {
        this.direction = Math.random() > 0.5;
        this.direction > 0.5 ? this.displaySideClassName = 'left' : this.displaySideClassName = 'right';
        return `<div class="container-message ${this.displaySideClassName}">
                    <div class="sender-name">${message.name}</div>
                    <div class="item-message">${message.text}</div>
                    <div class="msg-date">${message.date}</div>
                </div>`
    }

    createReturnMessage(message) {
        this.direction > 0.5 ? this.displaySideClassName = 'right' : this.displaySideClassName = 'left';
        $('.contact-messag').append(`<div class="container-message ${this.displaySideClassName}">
                    <div class="sender-name">${this.userContainer[Math.floor(Math.random() * 10)].name}</div>
                    <div class="item-message">${message}</div>
                    <div class="msg-date">${new Date().toLocaleTimeString()}</div>
                </div>`);
    }

    onUserClick(e) {
        this.message.name = this.userContainer.filter((element) => {
            return element.id === +e.target.id
        })[0].name
    }

}