import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgxStarsComponent } from 'ngx-stars';
import { Reservation } from 'src/app/models/Reservation';
import { ReservationService } from 'src/app/services/reservation.service';

@Component({
  selector: 'app-reservation-item',
  templateUrl: './reservation-item.component.html',
  styleUrls: ['./reservation-item.component.css']
})
export class ReservationItemComponent implements OnInit {
  @Input() reservation: Reservation;  
  @ViewChild(NgxStarsComponent) starsComponent: NgxStarsComponent;

  constructor(private reservationService: ReservationService) { }

  ngOnInit(): void { }

  toggleFavorite():void{
    this.reservation.favorite=!this.reservation.favorite;
  }

  setFavorite():void{
    this.toggleFavorite();
    this.reservationService.updateReservation(this.reservation)
    .subscribe(
      ()=>{},
      ()=>{this.toggleFavorite()}
      );
  }

  rateReservation(rating: number){
    this.reservation.ranking = rating;
    this.reservationService.rateReservation(this.reservation)
    .subscribe(
      ranking=>{
        this.reservation.ranking=ranking;
        this.starsComponent.setRating(ranking);
      }
    );
  }
}
