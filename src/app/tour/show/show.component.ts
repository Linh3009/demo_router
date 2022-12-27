import {Component, OnInit} from '@angular/core';
import {TourService} from "../../service/tour.service";

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit{
  constructor(public tourService: TourService) {
  }
  ngOnInit(): void {
  }
  delete(id:number){
    this.tourService.delete(id);
  }
}
