import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss']
})

export class ClockComponent implements OnInit {

  private daysArray = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  private date = new Date();

  public hour: any;
  public minutes: string;
  public seconds: string;
  public amPm: string;
  public day: string;


  constructor()
  {}

  ngOnInit()
  {
    setInterval(() => {
      const date = new Date();
      this.updateDate(date);
    },1000);

    this.day = this.daysArray[this.date.getDay()];

  }

  private updateDate(date : Date){
    const  hours = date.getHours();

    this.amPm = hours >= 12? 'PM' : 'AM';
    this.hour = hours % 12 ;
    this.hour = this.hour ? this.hour : 12;
    this.hour = this.hour < 10 ? '0' + this.hour :  this.hour; 

    const minutes = date.getMinutes();

    this.minutes = minutes < 10 ? '0' + minutes : minutes.toString();

    const seconds = date.getSeconds();
    this.seconds = seconds < 10 ? '0' + seconds : seconds.toString();
  }
}
