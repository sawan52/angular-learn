import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = '                                 ';
  versionNumber = 12;
  displayVal = '';
  count = 0;
  disable = false;

  fieldDisable() {
    this.disable == false ? (this.disable = true) : (this.disable = false);
  }

  counter(type: string) {
    type == 'add' ? this.count++ : this.count--;
  }

  getData(data: any) {
    console.log(data);
    this.displayVal = data;
  }

  getName(name: string) {
    alert('My name is ' + name);
  }

  compareValue() {
    if (this.title.trim() == 'blog') {
      console.log('title length: ' + this.title.length);
      console.log('trim title length: ' + this.title.trim().length);
      alert('Trim worked!');
    } else {
      console.log('title length: ' + this.title.length);
      console.log('trim title length: ' + this.title.trim().length);
      alert('Trim did not worked!');
    }
  }
}
