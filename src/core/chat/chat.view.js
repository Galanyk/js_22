import $ from "jquery";


export default class ChatView {
    static CONTAINER_CHAT = 'container-chat'

    constructor(options) {
        this.options = options;
    };

    userContainer = ['John', 'Smith'];
    $userList = null;
    message = null;

    setUserContainer(container) {
        this.userContainer = container;
        //  console.log("chat view setUserContainer userContainer: ", this.userContainer);
    }

    createUser(user) {
        return `<li class="item">${user}</li>`
    }


    renderChat($contrainer) {
        // console.log("chat view renderChat", $contrainer);
        // console.log("render char -> create chat", this.createChat());
        $contrainer.append(this.createChat())
            .on('click', ".button-send-message", (e) => this.onSendMessage(e));
        this.createUserList();
    };
    createUserList() {
        // console.log("chatView createUserList userContainer: ", this.userContainer);
        this.userContainer.forEach(element => {
            $('.list').append(this.createUser(element.name));
        });
    }
    createChat() {
        // console.log("chatView create chat");
        return $(`<div class="container-chat">
        <div class="container-users">
            <ul class="list">
            </ul>
        </div>
        <div class="container-messages">
            <div class="user-messag"></div>
            <div class="contact-messag">Sveta</div>
            <div>
                <input type="text" class="input-message">
                <button class="button-send-message">Send</button>
            </div>
        </div>
    </div>`);
    };

    onSendMessage(e) {
        console.log("Send message: ", this.getMessage());
        $('.contact-messag').append(this.createMessage(this.getMessage()));
        $('.user-messag').append(this.createMessage(this.getMessage()));
    }

    getMessage() {
        return $(".input-message").val();
    }
    createMessage(message) {
        return `<li>${message}</li>`
    }
}