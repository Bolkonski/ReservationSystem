import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { ContactType } from 'src/app/models/ContactType';
import { ContactTypeService } from 'src/app/services/contact-type.service';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  name: string;
  contactId?: number;
  phone: string;
  birthDate: string;
  contactTypeId: number;
  contactTypes: ContactType[];
  searchingContact: boolean = false;
  @Input() parentForm: FormGroup;
  protected ngUnsubscribe: Subject<void> = new Subject<void>();

  constructor(
    private contactService: ContactService,
    private contactTypeService: ContactTypeService) { }

  ngOnInit(): void {
    this.contactTypeService.getContactTypes().subscribe((types) => {
      this.contactTypes = types;
    });
  }

  searchExistingContact(): void {
    this.ngUnsubscribe.next();
    this.searchingContact = true;
    this.contactService.getContactByName({ name: this.name })
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((data) => {
        this.name = data.name;
        this.contactTypeId = data.contactTypeId;
        this.phone = data.phone || '';
        this.birthDate = data.birthDate;
        this.contactId = data.id || undefined;
        this.ngUnsubscribe.next();
        this.searchingContact = false;
      },
        (err) => {
          console.log(err);
          this.ngUnsubscribe.next();
          this.searchingContact = false;
          this.clearAutocompletion();
        },
        () => {
          //tryed to unsuscribe here, but somehow doesn't hit the complete statement
        });
  }

  clear(): void {
    this.name = '';
    this.contactId = undefined;
    this.phone = '';
    this.birthDate = '';
    this.contactTypeId = -1;
  }
  clearAutocompletion(): void {
    this.contactId = undefined;
    this.phone = '';
    this.birthDate = '';
    this.contactTypeId = -1;
  }
}
