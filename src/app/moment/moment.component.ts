import { Component, OnInit, ElementRef } from '@angular/core';

import * as moment from 'moment'

@Component({
  selector: 'app-moment',
  templateUrl: './moment.component.html',
  styleUrls: ['./moment.component.css']
})
export class MomentComponent implements OnInit {

  now = moment(); 

  constructor(private el: ElementRef) { }

  ngOnInit() {
    moment.locale();
    console.log(moment().format('MMMM Do YYYY, h:mm:ss a')); 
    console.log(moment.locale());
    console.log(moment().format('LTS'));5
    console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));
    console.log(moment().subtract(10, 'days').calendar());
  }
}
