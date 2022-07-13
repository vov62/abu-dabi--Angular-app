import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patients-content',
  templateUrl: './patients-content.component.html',
  styleUrls: ['./patients-content.component.css']
})
export class PatientsContentComponent implements OnInit {

  // list of patient details.
  patient = {
    name: 'שרי נוי',
    id: 200443085,
    age: 33,
    fileNumber: 2202279,
    serviceNumber: 0o1,
    phoneNumber: '0527333536',
    diary: 'חדר 1',
    location: 'מדיטון תל אביב'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
