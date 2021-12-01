import { Component, Input, OnInit } from '@angular/core';
import { Reservation } from 'src/app/models/Reservation';

@Component({
  selector: 'app-reservation-item',
  templateUrl: './reservation-item.component.html',
  styleUrls: ['./reservation-item.component.css']
})
export class ReservationItemComponent implements OnInit {
  @Input() reservation: Reservation;

  constructor() { }

  ngOnInit(): void {
  }

}
