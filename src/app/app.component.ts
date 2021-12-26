import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  versionNumber = 12;

  users = ['Sawan', 'Yash', 'Akash', 'Rohit', 'Ravi', 'Satyam'];

  user_detail = [
    {
      name: 'Sawan',
      email: 'Sawan@gmail.com',
      phone: '8956231400',
      socialAccounts: ['facebook', 'yahoo', 'gmail'],
    },
    {
      name: 'Yash',
      email: 'Yash@gmail.com',
      phone: '7854120325',
      socialAccounts: ['yahoo', 'facebook', 'gmail'],
    },
    {
      name: 'Akash',
      email: 'Akash@gmail.com',
      phone: '1204589600',
      socialAccounts: ['gmail', 'yahoo', 'facebook'],
    },
    {
      name: 'Rohit',
      email: 'Rohit@gmail.com',
      phone: '8562001122',
      socialAccounts: ['facebook', 'gmail', 'yahoo'],
    },
    {
      name: 'Ravi',
      email: 'Ravi@gmail.com',
      phone: '7788554422',
      socialAccounts: ['facebook', 'yahoo', 'gmail'],
    },
    {
      name: 'Satyam',
      email: 'Satyam@gmail.com',
      phone: '9966558844',
      socialAccounts: ['yahoo', 'facebook', 'gmail'],
    },
  ];
}
