import { Component, OnInit } from '@angular/core';
import { Reservation } from 'src/app/models/Reservation';
import { ReservationService } from 'src/app/services/reservation.service';

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.css']
})
export class ReservationListComponent implements OnInit {
  reservations: Reservation[] = [];
  currentPage: number = 1;

  constructor(private reservationService: ReservationService) { }

  ngOnInit(): void {
    this.reservationService.getReservations().subscribe(
      (reservations) => {
        this.reservations = reservations;
      }
    );
  }

}
