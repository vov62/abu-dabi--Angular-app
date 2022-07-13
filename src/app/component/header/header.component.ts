import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  span=', Branch - Abu Dabi Cosmetology Clinic: Sherry Sherry'
  title='לקוח מדיקל הראשון '

  constructor() { }

  ngOnInit(): void {
  }

}
