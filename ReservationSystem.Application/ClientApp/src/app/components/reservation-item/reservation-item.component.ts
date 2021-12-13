import { Component, Input, OnInit } from '@angular/core';
import { ThemePalette } from "@angular/material/core";
import { Reservation } from 'src/app/models/Reservation';
import { ReservationService } from 'src/app/services/reservation.service';

type Rating = {
  value: number;
  max: number;
  color?: ThemePalette;
  disabled?: boolean;
  dense?: boolean;
  readonly?: boolean;
};

@Component({
  selector: 'app-reservation-item',
  templateUrl: './reservation-item.component.html',
  styleUrls: ['./reservation-item.component.css']
})
export class ReservationItemComponent implements OnInit {
  @Input() reservation: Reservation;  
  rating: Rating;

  constructor(private reservationService: ReservationService) { }

  ngOnInit(): void {
    this.rating = {
      color:"warn",
      value:this.reservation.ranking||1,
      max: 5,
      dense: true
    };
  }

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

  rateReservation(){
    this.reservationService.rateReservation(this.reservation)
    .subscribe(
      ()=>{},
      (err)=>{console.log(err)}
    );
  }
}
