import {Component, OnInit} from '@angular/core';
import {TourService} from "../../service/tour.service";
import {Tour} from "../../model/Tour";

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit{
  tour: Tour = new Tour(0, "", 0, "")

  constructor(public tourService: TourService) {
  }
  ngOnInit(): void {
  }
  delete(id:number){
    this.tourService.delete(id);
  }


}
