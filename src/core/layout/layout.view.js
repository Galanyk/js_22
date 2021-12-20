import $ from "jquery";


export default class LayoutView {
    constructor() {}
    renderLayout($contrainer) {
        const $layout = this.createLayout();
        $contrainer.append($layout);
    }
    createLayout() {
        //     return $(`
        // <div class="layout-container">
        // <div class="header"></div>
        // <div id="main-container"></div>
        // </div>
        // `);
    }
}