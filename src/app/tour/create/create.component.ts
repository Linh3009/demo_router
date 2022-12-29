import {Component, OnInit} from '@angular/core';
import {Tour} from "../../model/Tour";
import {TourService} from "../../service/tour.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit{
  tour: Tour = new Tour(0, "", 0, "")

  constructor(public tourService:TourService, private router:Router) {
  }

  ngOnInit(): void {
  }

  create(){
    this.tourService.create(this.tour);
    console.log(this.tour);
    this.router.navigate(["/show"])
  }

}
