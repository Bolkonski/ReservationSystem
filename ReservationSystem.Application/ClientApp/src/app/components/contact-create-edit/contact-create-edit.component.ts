import { Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  //@ViewChild(ContactFormComponent) contactForm: ContactFormComponent;
  //contactId?: number;

  formGroup: FormGroup;
  contactIdControl: AbstractControl;
  nameControl: AbstractControl;
  contactTypeIdControl: AbstractControl;
  phoneControl: AbstractControl;
  birthDateControl: AbstractControl;

  checkInputs: boolean = false;

  constructor(
    private contactService: ContactService,
    private route: ActivatedRoute,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    //set contact form group for input validation
    this.formGroup = this.fb.group({
      contactId: [null],
      name: ['', [Validators.required]],
      contactTypeId: ['', [Validators.required]],
      phone: ['', [Validators.pattern("^[0-9]{3}-[0-9]{3}-[0-9]{3}$")]],
      birthDate: ['', [Validators.required]]
    });
    this.contactIdControl = this.formGroup.controls['contactId'];
    this.nameControl = this.formGroup.controls['name'];
    this.contactTypeIdControl = this.formGroup.controls['contactTypeId'];
    this.phoneControl = this.formGroup.controls['phone'];
    this.birthDateControl = this.formGroup.controls['birthDate'];

    this.contactIdControl.setValue(Number(this.route.snapshot.paramMap.get('id')));
    //this.contactId = Number(this.route.snapshot.paramMap.get('id'));
    if (this.contactIdControl.value) {
      this.contactService.getContactById(this.contactIdControl.value)
        .subscribe((contact: Contact) => {
          this.contactIdControl.setValue(contact.id);
          this.nameControl.setValue(contact.name);
          this.contactTypeIdControl.setValue(contact.contactTypeId);
          this.phoneControl.setValue(contact.phone);
          this.birthDateControl.setValue(contact.birthDate);

          // this.contactForm.contactId = contact.id;
          // this.contactForm.name = contact.name;
          // this.contactForm.contactTypeId = contact.contactTypeId;
          // this.contactForm.phone = contact.phone || '';
          // this.contactForm.birthDate = contact.birthDate;
        });
    }
  }

  onSubmit(): void {
    if (!this.formGroup.valid) {
      this.checkInputs = true;
    }
    else{
      (this.contactIdControl.value)
        ? this.editContact()
        : this.addContact();
    }
  }

  addContact(): void {
    this.contactService.addContact({
      name: this.nameControl.value,
      contactTypeId: this.contactTypeIdControl.value,
      phone: this.phoneControl.value,
      birthDate: this.birthDateControl.value
      // name: this.contactForm.name,
      // contactTypeId: this.contactForm.contactTypeId,
      // phone: this.contactForm.phone,
      // birthDate: this.contactForm.birthDate
    })
      .subscribe((data) => {
        console.log(data);
        alert('Contact created');
        this.clearContactForm();
        //this.contactForm.clear();
      });
  }
  editContact(): void {
    this.contactService.updateContact({
      id: this.contactIdControl.value,
      name: this.nameControl.value,
      contactTypeId: this.contactTypeIdControl.value,
      phone: this.phoneControl.value,
      birthDate: this.birthDateControl.value

      // id: this.contactId,
      // name: this.contactForm.name,
      // contactTypeId: this.contactForm.contactTypeId,
      // phone: this.contactForm.phone,
      // birthDate: this.contactForm.birthDate
    })
      .subscribe(() => {
        alert('Contact updated');
        this.clearContactForm();
        //this.contactForm.clear();
      });
  }
  clearContactForm(): void {
    this.nameControl.setValue('');
    this.contactIdControl.setValue(null);
    this.phoneControl.setValue('');
    this.birthDateControl.setValue('');
    this.contactTypeIdControl.setValue('');
    // this.name = '';
    // this.contactId = undefined;
    // this.phone = '';
    // this.birthDate = '';
    // this.contactTypeId = -1;
    this.checkInputs=false;
  }
}
