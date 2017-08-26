
import { Pipe, PipeTransform } from '@angular/core';
@Pipe({ name: 'filters' })
export class FiltersPipe implements PipeTransform {
  transform(contacts: any, searchText: any): any {
    if(searchText == null) return contacts;

    return contacts.filter(function(category){
       var name = category.name.toLowerCase().indexOf(searchText.toLowerCase()) > -1;
	   var username = category.username.toLowerCase().indexOf(searchText.toLowerCase()) > -1;
	   var email = category.email.toLowerCase().indexOf(searchText.toLowerCase()) > -1;
	   if(name){
		 return name;  
	   }else if(username){
		return username;
	   }else if(email){
		return email;
	   }else{
		return category.number.toString().indexOf(searchText.toString()) > -1;
	   }
    })
  }
}
