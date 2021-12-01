import { Component, OnInit } from '@angular/core';
import { ContactType } from 'src/app/models/ContactType';
import { ContactTypeService } from 'src/app/services/contact-type.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  name: string;
  contactId: string;
  phone: string;
  birthDate: string;
  contactTypes: ContactType[];

  constructor(private contactTypeService:ContactTypeService) { }

  ngOnInit(): void {
    this.contactTypeService.getContactTypes().subscribe((types)=>{
      this.contactTypes=types;
    });
  }

}
