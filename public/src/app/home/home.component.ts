import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [DatePipe]
})
export class HomeComponent implements OnInit {
  myUrl = ''
  myobjects: any = [
    { "name": "Fiddle Leaf Fig", "water_after": "7 days" },
    { "name": "Snake Plant", "water_after": "14 days" },
    { "name": "Money Tree", "water_after": "14 days" },
    { "name": "Bird's Nest Fern", "water_after": "3 days" },
    { "name": "Croton", "water_after": "7 days" },
    { "name": "Bell Pepper Plant", "water_after": "3 days" },
    { "name": "Strawberry Plant", "water_after": "3 days" },
    { "name": "Dracaena", "water_after": "14 days" },
    { "name": "Spider Plant", "water_after": "7 days" },
    { "name": "Jade", "water_after": "14 days" },
    { "name": "Wavy Fern", "water_after": "2 days" }
  ]
  simDate = "";
  currentSim = "";
  threes = []
  sevens = []
  fourteens = []
  twos = []
  

  show: any;
  currentDate = new Date();
  today = this.currentDate.getDay();
  startDay = new Date("12/16/2019");
  timediff = this.currentDate.getTime() - this.startDay.getTime();
  daydiff = Math.floor(this.timediff / (1000 * 3600 * 24));

  constructor(
    private http: HttpService,
    private router: Router,
    private route: ActivatedRoute,
    private datePipe: DatePipe
  ) { }

  ngOnInit() {

    for (let x of this.myobjects) {
      if (parseInt(x.water_after.split(" ")[0]) == 2) {
        // M W F
        this.twos.push(x);
      }
      else if (parseInt(x.water_after.split(" ")[0]) == 3) {
        // M Th
        this.threes.push(x);
      }
      else if (parseInt(x.water_after.split(" ")[0]) == 7) {
        // M
        this.sevens.push(x);
      }
      else if (parseInt(x.water_after.split(" ")[0]) == 14) {
        // Other
        this.fourteens.push(x);
      }
    }
    this.calculateDateDiff();
  }

  simulateDate(){
    this.startDay = new Date(this.simDate)
  }

  simulateToday() {
    this.currentDate = new Date(this.currentSim)
    this.today = this.currentDate.getDay();
    this.calculateDateDiff()
  }

  calculateDateDiff() {
    this.timediff = this.currentDate.getTime() - this.startDay.getTime();
    this.daydiff = Math.floor(this.timediff / (1000 * 3600 * 24));
  }

}