import UserView from "./user.view";
import UserModel from "./user.model";
import ("./user.css");

export default class UserController {
    static API = "https://jsonplaceholder.typicode.com";
    static ENVIRONMENT = {
        USERS: {
            getUsers: "/users",
        },
    };

    constructor($container) {
        //console.log('user', $container)
        this.$container = $container;
        this.userModel = new UserModel(UserController.API + UserController.ENVIRONMENT.USERS.getUsers);

        this.userView = new UserView({
            onDelete: (id) => this.deleteListItem(id),
            onEdit: (id) => this.editListItem(id),
            onAddNewUser: (user) => this.addNewUser(user),
            onEditSave: (user) => this.editSave(user),
        });
        this.userModel.getListItems().then(() => this.initViewRender());
        this.userView.createUserCreateContainer(this.$container);
    };

    getContainer() {
        // console.log("user controller get Container");
        return this.userModel.getContainer();
    }

    initViewRender() {
        // this.userView.renderList(this.userModel.getTodoListItems());
        this.userView.appendTo(this.$container);
    };

    deleteListItem(id) {
        this.userModel.deleteItem(id).then((r) => {
            this.initViewRender();
            this.userView.removeElement(id);
        });
    };

    editSave(user) {
        this.userModel.editSave(user);
        this.userView.renderList(this.userModel.getTodoListItems());
    };

    editListItem(id) {
        return this.userModel.editItem(id);
    };

    addNewUser(newUser) {
        this.userModel.addNewUser(newUser);
        this.userView.renderList(this.userModel.getTodoListItems());
    };
}