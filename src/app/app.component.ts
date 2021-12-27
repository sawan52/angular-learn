import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  versionNumber = 12;
  itemList: any[] = [];
  clearText = '';

  addNewTask(item: string) {
    this.itemList.push({ id: this.itemList.length, name: item });
    console.log(this.itemList.length + ' ---> ' + item);
    this.clearText = '';
  }

  removeTask(id: number) {
    this.itemList = this.itemList.filter((item) => item.id != id);
  }
}
