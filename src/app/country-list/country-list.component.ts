import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-country-list',
  template: `
    <h4 class="country">
      country-list works!
    </h4>
  `,
  styles: [
    `.country{
      color: blue;
    }`
  ]
})
export class CountryListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
