import { Component, OnInit, ViewChild } from '@angular/core';
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
  reservationDate: string;

  constructor(
    private reservationService: ReservationService,
    private contactService: ContactService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.reservationId = Number(this.route.snapshot.paramMap.get('id'));
    if (this.reservationId) {
      this.reservationService.getReservationById(this.reservationId)
        .subscribe((reservation: Reservation) => {
          this.contactForm.contactId = reservation.contactId;
          this.contactForm.name = reservation.contact.name;
          this.contactForm.contactTypeId = reservation.contact.contactTypeId;
          this.contactForm.phone = reservation.contact.phone || '';
          this.contactForm.birthDate = reservation.contact.birthDate;
          this.editor.rteObj.value = reservation.description || '';
        });
    }
  }

  onSubmit(): void {
    console.log(this.contactForm.name);
    if (!this.contactForm.contactId) {
      this.contactService.addContact({
        name: this.contactForm.name,
        contactTypeId: this.contactForm.contactTypeId,
        birthDate: this.contactForm.birthDate,
        phone: this.contactForm.phone
      }).subscribe((contact) => {
        this.contactForm.contactId = contact.id;
        this.reservationMethod();
      });
    }
    else
      this.reservationMethod();
  }

  reservationMethod(): void {
    (this.reservationId)
      ? this.editReservation()
      : this.addReservation();
  }

  addReservation(): void {
    this.reservationService.addReservation({
      description: this.editor.rteObj.value,
      date: this.reservationDate,
      contactId: this.contactForm.contactId || undefined,
      contact: {
        name: this.contactForm.name,
        contactTypeId: this.contactForm.contactTypeId,
        birthDate: this.contactForm.birthDate,
        phone: this.contactForm.phone
      }
    })
      .subscribe((data) => {
        console.log(data);
        alert('Reservation created');
        this.contactForm.clear();
        this.editor.rteObj.value = '';
      });
  }
  editReservation(): void {
    this.reservationService.updateReservation({
      id: this.reservationId,
      description: this.editor.rteObj.value,
      date: '2020-01-02',
      contactId: this.contactForm.contactId || undefined,
      contact: {
        name: this.contactForm.name,
        contactTypeId: this.contactForm.contactTypeId,
        birthDate: this.contactForm.birthDate,
        phone: this.contactForm.phone
      }
    })
      .subscribe(() => {
        alert('Reservation updated');
        this.contactForm.clear();
        this.editor.rteObj.value = '';
      });
  }
}
