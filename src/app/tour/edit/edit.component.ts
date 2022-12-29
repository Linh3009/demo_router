import {Component, OnInit} from '@angular/core';
import {TourService} from "../../service/tour.service";
import {Router} from "@angular/router";
import {Tour} from "../../model/Tour";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {


  constructor(public tourService: TourService, private router: Router) {
  }

  ngOnInit(): void {
  }

  edit(){
    this.tourService.edit();
    this.router.navigate(["/show"])
  }

}
