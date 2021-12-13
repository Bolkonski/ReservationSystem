import { Component, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Reservation } from 'src/app/models/Reservation';
import { ContactService } from 'src/app/services/contact.service';
import { ReservationService } from 'src/app/services/reservation.service';
import { ContactFormComponent } from '../contact-form/contact-form.component';
import { TextEditorComponent } from '../text-editor/text-editor.component';

@Component({
  selector: 'app-reservation-create-edit',
  templateUrl: './reservation-create-edit.component.html',
  styleUrls: ['./reservation-create-edit.component.css']
})
export class ReservationCreateEditComponent implements OnInit {
  @ViewChild(TextEditorComponent) editor: TextEditorComponent;
  @ViewChild(ContactFormComponent) contactForm: ContactFormComponent;
  reservationId?: number;
  //reservationDate: string;
  today: Date = new Date();

  formGroup: FormGroup;
  contactIdControl: AbstractControl;
  nameControl: AbstractControl;
  contactTypeIdControl: AbstractControl;
  phoneControl: AbstractControl;
  birthDateControl: AbstractControl;
  reservationDateControl: AbstractControl;

  checkInputs: boolean = false;

  constructor(
    private reservationService: ReservationService,
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
      birthDate: ['', [Validators.required]],
      reservationDate: ['', [Validators.required]]
    });
    this.contactIdControl = this.formGroup.controls['contactId'];
    this.nameControl = this.formGroup.controls['name'];
    this.contactTypeIdControl = this.formGroup.controls['contactTypeId'];
    this.phoneControl = this.formGroup.controls['phone'];
    this.birthDateControl = this.formGroup.controls['birthDate'];
    this.reservationDateControl = this.formGroup.controls['reservationDate'];
    //get id from url and load reservation if necessary
    this.reservationId = Number(this.route.snapshot.paramMap.get('id'));
    if (this.reservationId) {
      this.reservationService.getReservationById(this.reservationId)
        .subscribe((reservation: Reservation) => {
          this.contactIdControl.setValue(reservation.contactId);
          this.nameControl.setValue(reservation.contact?.name);
          this.contactTypeIdControl.setValue(reservation.contact?.contactTypeId);
          this.phoneControl.setValue(reservation.contact?.phone);
          this.birthDateControl.setValue(reservation.contact?.birthDate);
          // this.contactForm.contactId = reservation.contactId;
          // this.contactForm.name = (reservation.contact) ? reservation.contact.name : '';
          // this.contactForm.contactTypeId = (reservation.contact) ? reservation.contact.contactTypeId : -1;
          // this.contactForm.phone = (reservation.contact) ? reservation.contact.phone || '' : '';
          // this.contactForm.birthDate = (reservation.contact) ? reservation.contact.birthDate : '';
          this.editor.rteObj.value = reservation.description || '';
        });
    }
  }

  onSubmit(): void {
    if (!this.formGroup.valid) {
      this.checkInputs = true;
    }
    else {
      if (!this.contactIdControl.value) {
        this.contactService.addContact({
          name: this.nameControl.value,
          contactTypeId: this.contactTypeIdControl.value,
          birthDate: this.birthDateControl.value,
          phone: this.phoneControl.value,
          // name: this.contactForm.name,
          // contactTypeId: this.contactForm.contactTypeId,
          // birthDate: this.contactForm.birthDate,
          // phone: this.contactForm.phone
        }).subscribe((contact) => {
          this.contactIdControl.setValue(contact.id);
          // this.contactForm.contactId = contact.id;
          this.reservationMethod();
        },
          (error) => {
            alert(error);
          });
      }
      else {
        this.reservationMethod();
      }
    }

  }

  reservationMethod(): void {
    (this.reservationId)
      ? this.editReservation()
      : this.addReservation();
  }

  addReservation(): void {
    this.reservationService.addReservation({
      description: this.editor.rteObj.value,
      date: this.reservationDateControl.value,
      contactId: this.contactIdControl.value
      // contactId: this.contactForm.contactId || undefined
    })
      .subscribe((data) => {
        console.log(data);
        this.clearContactForm();
        // this.contactForm.clear();
        this.editor.rteObj.value = '';
        this.checkInputs=false;
        alert('Reservation created');
      },
        (error) => {
          alert(error);
        });
  }
  editReservation(): void {
    this.reservationService.updateReservation({
      id: this.reservationId,
      description: this.editor.rteObj.value,
      date: this.reservationDateControl.value,
      contactId: this.contactIdControl.value,
      // contactId: this.contactForm.contactId || undefined,
      contact: {
        name: this.nameControl.value,
        contactTypeId: this.contactTypeIdControl.value,
        birthDate: this.birthDateControl.value,
        phone: this.phoneControl.value
        // name: this.contactForm.name,
        // contactTypeId: this.contactForm.contactTypeId,
        // birthDate: this.contactForm.birthDate,
        // phone: this.contactForm.phone
      }
    })
      .subscribe(() => {
        alert('Reservation updated');
        this.clearContactForm();
        //this.contactForm.clear();
        this.editor.rteObj.value = '';
      });
  }

  //Input validation
  isControlValid(controlName: string): boolean {
    const control = this.formGroup.controls[controlName];
    return control.valid && (control.dirty || control.touched);
  }

  clearContactForm(): void {
    this.nameControl.setValue('');
    this.contactIdControl.setValue(null);
    this.phoneControl.setValue('');
    this.birthDateControl.setValue('');
    this.contactTypeIdControl.setValue(null);
    this.reservationDateControl.setValue('');
    // this.name = '';
    // this.contactId = undefined;
    // this.phone = '';
    // this.birthDate = '';
    // this.contactTypeId = -1;
  }
}
