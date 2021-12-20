import $ from "jquery";


export default class ChatView {
    static CONTAINER_CHAT = 'container-chat'
    id = 0;
    constructor(options) {
        console.log("constructor chat view");
        this.options = options;
    };

    userContainer = null;
    userList = null;

    setUserContainer(container) {
        console.log("chatView.setUserContainer", container);
        this.userContainer = container;
    }
    renderChat($contrainer) {
        console.log("chat render");
        console.log('container_', this.contrainer_);
        const $chat = this.createChat();
        this.userList = $chat;
        $contrainer.append($chat);
    };

    createChat() {
        console.log("Create chat");
        return $(`<div class="container-chat">
        <div class="container-users">
            <ul class="list-chat">
                <li>John</li>
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
    createUser(name) {
        console.log('createUser')
        return $(`<li class=list-chat>${name}</li>`)
    }

    createUserList($container) {
        console.log('reateUserList', this.userContainer);
        const chatList = document.getElementsByClassName('list-chat');
        console.log("chat list befor: ", chatList)
        console.log(this.createUser(this.userContainer[0].name));
        this.userContainer.forEach(element => {
            $(chatList).append(this.createUser(element.name));
            //console.log("new user: ", this.createUser(element.name));
            console.log("chat list after: ", chatList);
        });

    }





}