import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  versionNumber = 12;
  color = "blue";
  bgColor = "green";

  updateColor(){
    this.color = "red";
    this.bgColor = "blue";
  }
}
