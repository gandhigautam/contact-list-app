
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ContactListComponent } from './contacts/contacts-list.component';
import { FiltersPipe } from './shared/directives/filters.pipe';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    ContactListComponent,
    FiltersPipe
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
