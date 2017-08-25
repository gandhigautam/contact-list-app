
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ContactListComponent } from './contacts/contacts-list.component';
// import { UserFormComponent } from './users/user-form.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    ContactListComponent,
    // UserFormComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
