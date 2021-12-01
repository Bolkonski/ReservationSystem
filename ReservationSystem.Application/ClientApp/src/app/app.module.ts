import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import { RichTextEditorModule } from '@syncfusion/ej2-angular-richtexteditor';

import { AppComponent } from './app.component';
import { ReservationListComponent } from './components/reservation-list/reservation-list.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { ContactCreateComponent } from './components/contact-create/contact-create.component';
import { ReservationCreateComponent } from './components/reservation-create/reservation-create.component';
import { ReservationItemComponent } from './components/reservation-item/reservation-item.component';
import { ContactItemComponent } from './components/contact-item/contact-item.component';
import { TextEditorComponent } from './components/text-editor/text-editor.component';
import { NavComponent } from './components/nav/nav.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';

@NgModule({
  declarations: [
    AppComponent,
    ReservationListComponent,
    ContactListComponent,
    ContactCreateComponent,
    ReservationCreateComponent,
    ReservationItemComponent,
    ContactItemComponent,
    TextEditorComponent,
    NavComponent,
    ContactFormComponent,
    PageHeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    NgxPaginationModule,
    RouterModule.forRoot([
      { path: '', component: ReservationListComponent },
      { path: 'reservations', component: ReservationListComponent },
      { path: 'reservations/create', component: ReservationCreateComponent },
      { path: 'contacts', component: ContactListComponent },
      { path: 'contacts/create', component: ContactCreateComponent },
    ]),
    RichTextEditorModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
