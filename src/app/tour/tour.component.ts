import {Component, Input, OnInit} from '@angular/core';
import {Tour} from "../model/Tour";

@Component({
  selector: 'app-tour',
  templateUrl: './tour.component.html',
  styleUrls: ['./tour.component.css']
})
export class TourComponent implements OnInit{


  ngOnInit(): void {
  }

  // create(): void {
  //   let check = true
  //   for (let i = 0; i < this.tourList1.length; i++) {
  //     if (this.tourList1[i].id === this.tours.id) {
  //       check = false;
  //     }
  //   }
  //   if (check) {
  //     this.tourList1.push(new Tour(this.tours.id, this.tours.name, this.tours.price, this.tours.describe))
  //   }
  // }
  //
  // showEdit(tour: Tour): void {
  //   this.tours = new Tour(tour.id,tour.name,tour.price,tour.describe)
  // }
  //
  // edit():void{
  //   for (let i = 0; i < this.tourList1.length; i++) {
  //     if (this.tourList1[i].id === this.tours.id){
  //       this.tourList1[i] = this.tours
  //     }
  //   }
  //   this.restart()
  // }
  //
  //
  // delete(id:number):void{
  //   for (let i = 0; i < this.tourList1.length; i++) {
  //     if (this.tourList1[i].id===id){
  //       this.tourList1.splice(i,1)
  //     }
  //   }
  // }
  //
  // restart():void{
  //   this.tours = new Tour(0, "", 0, "")
  // }

}
