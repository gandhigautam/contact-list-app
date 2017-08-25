"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var contact_1 = require("../shared/models/contact");
var ContactListComponent = (function () {
    function ContactListComponent() {
        this.newContact = new contact_1.Contact();
        this.addNewContact = false;
        this.contacts = [
            { id: 25, name: 'Gautam', username: 'gautam gupta', email: 'gautam.gupta@gmail.com', number: 8882494782, type: 'friend', avatar: 'https://www.gravatar.com/avatar/1ab41dbcb69778369bc77fe5521e25cc?size=400' },
            { id: 26, name: 'Sonaya', username: 'sonaya sweets', email: 'sonaya.sweets@gmail.com', number: 9872494770, type: 'customer', avatar: 'https://pbs.twimg.com/profile_images/721918869821005824/2qT_RY5M_400x400.jpg' },
            { id: 27, name: 'Hoster', username: 'holly Hoster', email: 'holly.hoster@gmail.com', number: 8782494785, type: 'friend', avatar: 'https://pbs.twimg.com/profile_images/502500686588690432/wXBzuCBj_400x400.jpeg' }
        ];
    }
    // activeContact: Contact;
    // Note: this is temprory we can simply make all methods to as service
    /**
    * This service is use for clear all input
    */
    ContactListComponent.prototype.deselectContact = function () {
        this.newContact = {};
        this.addNewContact = false;
    };
    /**
    * This service is use for add new contact
    */
    ContactListComponent.prototype.addContact = function (newContact, length) {
        if (Object.keys(newContact).length >= 5) {
            Object.assign(newContact, { id: length + 1 });
            console.log(newContact);
            this.contacts.push(newContact);
            this.deselectContact();
        }
    };
    /**
    * This service is use for delete contact
    */
    ContactListComponent.prototype.removeContact = function (id) {
        console.log(id);
        this.contacts = this.contacts.filter(function (contact) { return contact.id !== id; });
        return this;
    };
    /**
    * This service is use for filter by Type
    */
    ContactListComponent.prototype.filterContact = function (type) {
        if (type) {
            var news = this.contacts.filter(function (contact) { return contact.type == type; });
            this.contacts = news;
        }
    };
    /**
    * This service is use for edit filter contact
    */
    ContactListComponent.prototype.editContact = function (id) {
        var news = this.contacts.filter(function (contact) { return contact.id == id; });
        this.newContact = news[0];
        this.addNewContact = true;
        console.log(news[0]);
    };
    /**
    * This service is use for get contact by field by info  like search by field
    */
    //  none for now
    /**
    * This service is use for update contact.
    */
    ContactListComponent.prototype.updateContact = function (id, values) {
        if (values === void 0) { values = {}; }
        if (Object.keys(values).length >= 6) {
            var doit = this.getRemoveById(id);
            if (!doit) {
                return null;
            }
            Object.assign(doit, values);
            this.deselectContact();
            return doit;
        }
    };
    /**
    * This service is use for remove before update it.
    */
    ContactListComponent.prototype.getRemoveById = function (id) {
        return this.contacts
            .filter(function (contacts) { return contacts.id === id; })
            .pop();
    };
    return ContactListComponent;
}());
ContactListComponent = __decorate([
    core_1.Component({
        selector: 'contacts-list',
        templateUrl: './app/contacts/contacts-list.component.html',
        styleUrls: ['./app/contacts/contacts-list.component.css']
    }),
    __metadata("design:paramtypes", [])
], ContactListComponent);
exports.ContactListComponent = ContactListComponent;
//# sourceMappingURL=contacts-list.component.js.map