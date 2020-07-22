import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.sass']
})
export class WeatherCardComponent implements OnInit {

  condition = ''
  darkMode = false
  currentTemp = 0
  minTemp = 0
  maxTemp = 0

  constructor() { }

  ngOnInit(): void {
  }

  openDetails () {
    console.log('details')
  }

}
