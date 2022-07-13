import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-section',
  templateUrl: './form-section.component.html',
  styleUrls: ['./form-section.component.css']
})
export class FormSectionComponent implements OnInit {

  footerLinks = [
    {
      number: '1',
      name: 'Add accounting row',
      icon: 'bi bi-plus'
    },
    {
      number: '2',
      name: 'Pass card',
      icon: 'bi bi-credit-card'
    },
    {
      number: '3',
      name: 'Charge',
      icon: 'bi bi-currency-dollar'
    },
    {
      number: '4',
      name: 'Sheet',
      icon: 'bi bi-file-earmark-spreadsheet'
    },
    {
      number: '5',
      name: 'Prescriptions',
      icon: 'bi bi-file-plus'
    },
    {
      number: '6',
      name: 'Visit summary',
      icon: 'bi bi-activity'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
