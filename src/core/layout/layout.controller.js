import LayoutView from "./layout.view";
import ChatView from '../chat/chat.view';
import TodoListController from '../../features/user/user.controller'
import $ from 'jquery';
import ("./layout.css");
export default class LayoutController {
    constructor($el) {
        // this.userC = null;
        this.$container = $el;
        this.view = new LayoutView();
        this.chatView = new ChatView();
        //this.chatView.renderChat(this.$container);
        // init();
    }

    init() {
        console.log("Layout controller init");
        this.view.renderLayout(this.$container);
        this.chatView.renderChat(this.$container);

    }
}