import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-donor',
  templateUrl: './donor.component.html',
  styleUrls: ['./donor.component.css']
})
export class DonorComponent implements OnInit {

  donors: any = [];

  constructor(public rest: RestService) { }

  ngOnInit() {
    this.getDonors();
  }

  getDonors(){
    this.donors= [];
    this.rest.getDonors().subscribe((data: {}) => {
      console.log(data);
      this.donors = data;
    });
  }

}
