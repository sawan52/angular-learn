import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  versionNumber = 12;
  userData: any = {};

  getData(data: NgForm) {
    console.log(data);
    this.userData = data;
  }
}
