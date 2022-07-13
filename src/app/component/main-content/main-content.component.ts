import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {

  navList = [
    {
      number: '1',
      name: 'Patients',
      icon: 'bi bi-person'
    },
    {
      number: '2',
      name: 'Calendars',
      icon: 'bi bi-calendar'
    },
    {
      number: '3',
      name: 'Tables',
      icon: 'bi bi-bar-chart-line'
    },
    {
      number: '4',
      name: 'SMS',
      icon: 'bi bi-phone'
    },
    {
      number: '5',
      name: 'Price lists//financial',
      icon: 'bi bi-cash'
    },
    {
      number: '6',
      name: 'Personnel price lists',
      icon: 'bi bi-cash'
    },
    {
      number: '7',
      name: 'Reports',
      icon: 'bi bi-person'
    },
    {
      number: '8',
      name: 'System',
      icon: 'bi bi-gear'
    },
    {
      number: '9',
      name: 'About',
      icon: 'bi bi-person'
    },
    {
      number: '10',
      name: 'Personalization',
      icon: 'bi bi-brush'
    },
  ]

  // mobile btn toggle function
  sideNavToggle: boolean = false;
  openMenu() {
    this.sideNavToggle = !this.sideNavToggle;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
