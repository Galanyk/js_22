import $ from "jquery";

export default class ChatView {
    static CONTAINER_CHAT = 'container-chat'
    constructor(options) {
        console.log("constructor chat view");
        this.options = options;
        // this.$ListContainerEl =
        //     this.initView()
        //     .on('click', `.${TodoListView.BUTTON_CLASS.BUTTON_DEL}`, (e) => this.onDeleteClick(e))
        //     .on('click', `.${TodoListView.BUTTON_CLASS.BUTTON_EDIT}`, (e) => this.onEditClick(e))
        //     .on('click', `.${TodoListView.BUTTON_CLASS.BUTTON_SAVE_NEW_USER}`, (e) => this.onSaveNewUser(e))
        //     .on('click', `.${TodoListView.BUTTON_CLASS.BUTTON_SAVE}`, (e) => this.onEditSave(e))
    };

    // initView()
    renderChat($contrainer) {
        console.log("chat render");
        const $chat = this.createChat();
        $contrainer.append($chat);
    };

    createChat() {
        console.log("Create chat");
        return $(`<div class="container-chat">
        <div class="container-users">
            <ul>
                <li>AAA</li>
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