import { Component, OnInit } from '@angular/core';

import * as moment from 'moment'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  now = moment(); // add this 2 of 4


  ngOnInit() {
    moment.locale();
    console.log('hello world', this.now.format()); 
    console.log(moment.locale());
    console.log(moment().format('LTS'));
  }
}
