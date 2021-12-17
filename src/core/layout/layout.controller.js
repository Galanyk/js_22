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
        // this.chatView.renderChat(this.$container);

        // init();
    }

    init() {
        this.view.renderLayout(this.$container);
        // this.userC = new TodoListController($('#main-container'))
        console.log('controller', this.userC)
            // this.userC.initViewRender();
        this.chatView.renderChat(this.$container);
    }
}