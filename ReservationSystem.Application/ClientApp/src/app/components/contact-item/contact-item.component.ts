import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Contact } from 'src/app/models/Contact';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact-item',
  templateUrl: './contact-item.component.html',
  styleUrls: ['./contact-item.component.css']
})
export class ContactItemComponent implements OnInit {
  @Input() contact: Contact;
  @Output() onDeleteContact: EventEmitter<any> = new EventEmitter();

  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
  }

  onDelete(contact:Contact): void {
    this.onDeleteContact.emit(contact);
  }

}
