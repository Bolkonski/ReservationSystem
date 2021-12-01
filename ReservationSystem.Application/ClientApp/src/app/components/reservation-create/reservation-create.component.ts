import { Component, OnInit, ViewChild } from '@angular/core';
import { ReservationService } from 'src/app/services/reservation.service';
import { ContactFormComponent } from '../contact-form/contact-form.component';
import { TextEditorComponent } from '../text-editor/text-editor.component';

@Component({
  selector: 'app-reservation-create',
  templateUrl: './reservation-create.component.html',
  styleUrls: ['./reservation-create.component.css']
})
export class ReservationCreateComponent implements OnInit {
  @ViewChild(ContactFormComponent) contactForm: ContactFormComponent;
  @ViewChild(TextEditorComponent) editor: TextEditorComponent;

  constructor(private reservationService: ReservationService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log(this.contactForm.contactId);
    this.reservationService.addReservation({
      description: this.editor.rteObj.value,
      date:'2020-01-02',
      contactId: 1,
      contact: {
        name: this.contactForm.name,
        contactTypeId: parseInt(this.contactForm.contactId),
        birthDate: this.contactForm.birthDate,
        phone: this.contactForm.phone,
        contactType: this.contactForm.contactTypes[0]//create selectedContact property and find
      }
    })
    .subscribe((data)=>{
      console.log(data)
    });
  }
}
