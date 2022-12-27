import {Component, OnInit} from '@angular/core';
import {TourService} from "../../service/tour.service";

@Component({
  selector: 'app-tour-detail',
  templateUrl: './tour-detail.component.html',
  styleUrls: ['./tour-detail.component.css']
})
export class TourDetailComponent implements OnInit{
  constructor(public tourService: TourService) {
  }
  ngOnInit(): void {
  }
  delete(id:number){
    this.tourService.delete(id);
  }

}
