

import { Component } from '@angular/core';
import { Contact } from '../shared/models/contact';

@Component({
   selector: 'contacts-list',
   templateUrl: './app/contacts/contacts-list.component.html',
   styleUrls: ['./app/contacts/contacts-list.component.css']

})

export class ContactListComponent {

    messageOne: "contactlist gautam yes";

    newContact: Object = new Contact();

    id: number;
    name: string;
    username: string;
    email: string;
    number: number;
    type: string;
    avatar: string;
    addNewContact: boolean = false;

    activeContact: Object;

    contacts: Contact[] = [
      { id: 25, name: 'Gautam', username: 'gautam gupta' ,  email: 'gautam.gupta@gmail.com' ,   number : 8882494782,   type: 'friend' ,     avatar:  'https://www.gravatar.com/avatar/1ab41dbcb69778369bc77fe5521e25cc?size=400'},
      { id: 26, name: 'Sonaya', username: 'sonaya sweets' , email: 'sonaya.sweets@gmail.com' ,  number : 9872494770,  type: 'customer',  avatar: 'https://pbs.twimg.com/profile_images/721918869821005824/2qT_RY5M_400x400.jpg' },
      { id: 27, name: 'Hoster', username: 'holly Hoster' ,  email: 'holly.hoster@gmail.com' ,   number : 8782494785,   type: 'friend' ,    avatar: 'https://pbs.twimg.com/profile_images/502500686588690432/wXBzuCBj_400x400.jpeg'}
    ];

    constructor(){ }

    // activeContact: Contact;



// Note: this is temprory we can simply make all methods to as service

    /**
    * This service is use for clear all input
    */

    deselectContact(){
      this.newContact = {};
      this.addNewContact = false;
    }

    /**
    * This service is use for add new contact
    */

    addContact(newContact,length){
      if(Object.keys(newContact).length >= 5){
        Object.assign(newContact, {id: length+1})
        console.log(newContact)
        this.contacts.push(newContact);
        this.deselectContact();
      }
    }

    /**
    * This service is use for delete contact
    */

    removeContact(id: number){
      console.log(id)
      this.contacts = this.contacts.filter(contact => contact.id !== id);
      return this;
    }

    /**
    * This service is use for filter by Type
    */
    filterContact(type: string){
      if(type){
      let news = this.contacts.filter(contact => contact.type == type);
      this.contacts = news;
      }
    }

    /**
    * This service is use for edit filter contact
    */

    editContact(id: number){
      let news = this.contacts.filter(contact => contact.id == id);
      this.newContact = news[0];
      this.addNewContact = true;
      console.log(news[0]);
    }

    /**
    * This service is use for get contact by field by info  like search by field
    */
        //  none for now

    /**
    * This service is use for update contact.
    */

    updateContact(id: number, values: Object = {}) {
      if(Object.keys(values).length >= 6){
        let doit = this.getRemoveById(id);
        if (!doit) {
          return null;
        }
        Object.assign(doit, values);
        this.deselectContact();
        return doit;
       }
     }


    /**
    * This service is use for remove before update it.
    */

    getRemoveById(id: number) {
      return this.contacts
        .filter(contacts => contacts.id === id)
        .pop();
    }




}
