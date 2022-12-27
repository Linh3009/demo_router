import { Injectable } from '@angular/core';
import {Tour} from "../model/Tour";

@Injectable({
  providedIn: 'root'
})
export class TourService {

  tours: Tour = new Tour(0, "", 0, "")
  tourList: Tour[] = [new Tour(1, "Sapa", 2000000, "Giới thiệu: Sapa lạnh vl"),
    new Tour(2, "Ninh Bình", 1600000, "Giới thiệu: Sapa lạnh vl"),
    new Tour(3, "Hà Giang", 2000000, "Giới thiệu: Sapa lạnh vl"),
    new Tour(4, "Quy Nhơn", 3500000, "Giới thiệu: Quy Nhơn lạnh vl"),
    new Tour(5, "Sapa", 3000000, "Giới thiệu: Sapa lạnh vl"),
    new Tour(6, "Mộc Châu", 1200000, "Giới thiệu: Mộc Châu lạnh vl"),
  ]

  constructor() { }


  create(tour:Tour): void {
    let check = true
    for (let i = 0; i < this.tourList.length; i++) {
      if (this.tourList[i].id === tour.id) {
        check = false;
      }
    }
    if (check) {
      this.tourList.push(tour)
    }
  }

  showEdit(tour: Tour): void {
    this.tours = new Tour(tour.id,tour.name,tour.price,tour.describe)
  }

  edit():void{
    for (let i = 0; i < this.tourList.length; i++) {
      if (this.tourList[i].id === this.tours.id){
        this.tourList[i] = this.tours
      }
    }
    this.restart()
  }


  delete(id:number):void{
    for (let i = 0; i < this.tourList.length; i++) {
      if (this.tourList[i].id===id){
        this.tourList.splice(i,1)
      }
    }
  }

  restart():void{
    this.tours = new Tour(0, "", 0, "")
  }

  showTour(i : number):void{
    this.tours = this.tourList[i];
  }
}
