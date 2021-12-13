import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { ContactType } from 'src/app/models/ContactType';
import { ContactTypeService } from 'src/app/services/contact-type.service';
import { ContactService } from 'src/app/services/contact.service';
import { ReservationCreateEditComponent } from '../reservation-create-edit/reservation-create-edit.component';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  //name: string;
  // contactId?: number;
  // phone: string;
  birthDate: string;
  // contactTypeId: number;
  contactTypes: ContactType[];
  searchingContact: boolean = false;
  today: Date = new Date();
  @Input() form: FormGroup;
  contactIdControl: AbstractControl;
  nameControl: AbstractControl;
  contactTypeIdControl: AbstractControl;
  phoneControl: AbstractControl;
  birthDateControl: AbstractControl;
  protected ngUnsubscribe: Subject<void> = new Subject<void>();
  @Input() checkInputs: boolean;

  constructor(
    private contactService: ContactService,
    private contactTypeService: ContactTypeService,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this.contactTypeService.getContactTypes().subscribe((types) => {
      this.contactTypes = types;
    });
    this.contactIdControl = this.form.controls['contactId'];
    this.nameControl = this.form.controls['name'];
    this.contactTypeIdControl = this.form.controls['contactTypeId'];
    this.phoneControl = this.form.controls['phone'];
    this.birthDateControl = this.form.controls['birthDate'];
  }

  searchExistingContact(): void {
    this.ngUnsubscribe.next();
    this.searchingContact = true;
    this.contactService.getContactByName({ name: this.nameControl.value })
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((data) => {
        this.contactIdControl.setValue(data.id);
        this.contactTypeIdControl.setValue(data.contactTypeId);
        this.phoneControl.setValue(data.phone);
        this.birthDateControl.setValue(data.birthDate);
        // this.phone = data.phone || '';
        // this.birthDate = data.birthDate;
        // this.contactId = data.id || undefined;
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

  // clear(): void {
  //   this.nameControl.setValue('');
  //   this.contactIdControl.setValue(null);
  //   this.phoneControl.setValue('');
  //   this.birthDateControl.setValue('');
  //   this.contactTypeIdControl.setValue(null);
  //   // this.name = '';
  //   // this.contactId = undefined;
  //   // this.phone = '';
  //   // this.birthDate = '';
  //   // this.contactTypeId = -1;
  // }
  clearAutocompletion(): void {
    this.contactIdControl.setValue(null);
    this.phoneControl.setValue('');
    this.birthDateControl.setValue('');
    this.contactTypeIdControl.setValue(null);
    // this.contactId = undefined;
    // this.phone = '';
    // this.birthDate = '';
    // this.contactTypeId = -1;
  }

  //Input validation
  phoneKeyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;

    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }
  isControlValid(controlName: string): boolean {
    const control = this.form.controls[controlName];
    return control.valid && (control.dirty || control.touched);
  }
}
