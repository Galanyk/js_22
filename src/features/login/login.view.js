import $ from "jquery";

export default class LoginView {

    static CLASS = {
        TEXT: 'text',
    }
    constructor(options) {
        this.options = options;
    };

    renderLoginForm($contrainer) {
        const $form = this.createForm();
        $contrainer.append($form);
        this.initListeners();
    };

    initListeners() {
        $("#login-btn").on("click", this.onClick);
    };

    onClick = () => {
        this.options.login($('.name').val(), $('.login').val());
    };

    createForm() {
        return $(
            `<div>
        <h1 id="${LoginView.CLASS.TEXT}">Chat</h1>
        <h4>Login: Sveta. pass: 123</h4>
        <input type="text" class="name" placeholder="enter login"/>
        <input type="password" class="login" placeholder="enter password"/>
        <button id="login-btn"> login </button>
        </div>`
        );
    };
}