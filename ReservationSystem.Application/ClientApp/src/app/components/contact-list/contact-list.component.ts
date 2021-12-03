import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/Contact';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contacts: Contact[] = [];
  currentPage: number = 1;

  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
    this.loadContacts();
  }

  loadContacts(){
    this.contactService.getContacts().subscribe(
      (contacts) => {
        this.contacts = contacts;
      }
    );
  }

  deleteContact(contact: Contact){
    if(confirm("Are you sure to delete this contact?")){
      this.contactService.deleteContact(contact.id)
      .subscribe(()=>{
        alert('Contact deleted');
        this.loadContacts();
      });
    }
  }
}
