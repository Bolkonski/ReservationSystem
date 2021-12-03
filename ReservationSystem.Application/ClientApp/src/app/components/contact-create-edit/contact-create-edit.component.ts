import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Contact } from 'src/app/models/Contact';
import { ContactService } from 'src/app/services/contact.service';
import { ContactFormComponent } from '../contact-form/contact-form.component';

@Component({
  selector: 'app-contact-create-edit',
  templateUrl: './contact-create-edit.component.html',
  styleUrls: ['./contact-create-edit.component.css']
})
export class ContactCreateEditComponent implements OnInit {
  @ViewChild(ContactFormComponent) contactForm: ContactFormComponent;
  contactId?: number;

  constructor(
    private contactService: ContactService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.contactId = Number(this.route.snapshot.paramMap.get('id'));
    if (this.contactId) {
      this.contactService.getContactById(this.contactId)
        .subscribe((contact: Contact) => {
          this.contactForm.contactId = contact.id;
          this.contactForm.name = contact.name;
          this.contactForm.contactTypeId = contact.contactTypeId;
          this.contactForm.phone = contact.phone || '';
          this.contactForm.birthDate = contact.birthDate;
        });
    }
  }

  onSubmit(): void {
    (this.contactId)
    ? this.editContact()
    : this.addContact();
  }

  addContact(): void {
    this.contactService.addContact({
      name: this.contactForm.name,
      contactTypeId: this.contactForm.contactTypeId,
      phone:this.contactForm.phone,
      birthDate:this.contactForm.birthDate
    })
      .subscribe((data) => {
        console.log(data);
        alert('Contact created');
        this.contactForm.clear();
      });
  }
  editContact(): void {
    this.contactService.updateContact({
      id: this.contactId,
      name: this.contactForm.name,
      contactTypeId: this.contactForm.contactTypeId,
      phone: this.contactForm.phone,
      birthDate:this.contactForm.birthDate
    })
      .subscribe(() => {
        alert('Contact updated');
        this.contactForm.clear();
      });
  }
}
