import $ from "jquery";


export default class ChatView {
    static CONTAINER_CHAT = 'container-chat'

    constructor(options) {
        this.options = options;
    };

    userContainer = ['John', 'Smith'];
    $userList = null;

    setUserContainer(container) {
        this.userContainer = container;
        console.log("chat view setUserContainer userContainer: ", this.userContainer);
    }

    createUser(user) {
        return `<li class="item">${user}</li>`
    }


    renderChat($contrainer) {
        console.log("chat view renderChat", $contrainer);
        console.log("render char -> create chat", this.createChat());
        $contrainer.append(this.createChat());
        this.createUserList();

    };
    createUserList() {
        console.log("chatView createUserList userContainer: ", this.userContainer);
        const chatList = document.getElementsByClassName('list');
        this.userContainer.forEach(element => {
            $(chatList).append(this.createUser(element.name));
        });
    }
    createChat() {
        console.log("chatView create chat");
        return $(`<div class="container-chat">
        <div class="container-users">
            <ul class="list">
            </ul>
        </div>
        <div class="container-messages">
            <div class="user-messag"></div>
            <div class="contact-messag"></div>
            <div>
                <input type="messag">
                <button>Send</button>
            </div>
        </div>
    </div>`);
    };
}