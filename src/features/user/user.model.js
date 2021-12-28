// import View from "./user.view";
// import $ from "jquery";

export default class UserModel {
    userItems = [];
    constructor(url) {
        this.url = url;
    };

    getListItems() {
        return fetch(this.url)
            .then((r) => r.json())
            .then((r) => this.setListData(r))
    };

    setListData(data) {
        this.userItems = data;
    };

    getTodoListItems() {
        return this.userItems[this.userItems.length - 1];
    };

    getDataUser(data) {
        this.userItems = data;
    };

    deleteItem(id) {
        return fetch(this.url + "/" + id, { method: 'DELETE' })
            .then((r) => {
                this.userItems = this.userItems.filter((i) => i.id !== +id);
                return Promise.resolve(id);
            });
    };

    editItem(id) {
        const element = this.userItems.find((e) => e.id === +id);
        return element;
    };

    editSave(user) {
        const tempUser = this.userItems.find((e) => e.id === +user.id);
        tempUser.name = user.name;
        tempUser.address.city = user.address;
        tempUser.phone = user.phone;
    };

    addNewUser(newUser) {
        if (!newUser.name) {
            alert('Incorrect name');
            return;
        } else if (!newUser.address.city) {
            alert('Incorrect address');
            return;
        } else if (!newUser.phone) {
            alert('Incorrect phone');
            return
        };
        Object.assign(newUser, { id: this.userItems.length + 1, })
        this.userItems.push(newUser);
        //console.log("container: ", this.userItems.length);
    };


    getContainer() {
        // console.log("user model getContainer", this.userItems);
        return this.userItems;
    }
}