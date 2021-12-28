import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  versionNumber = 12;
  displayData = 'default';

  updateData(item: string) {
    console.warn(item);
    this.displayData = item;
  }
}
