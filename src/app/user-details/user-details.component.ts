import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
})
export class UserDetailsComponent implements OnInit {
  constructor() {}
  @Input() item: {
    name: string;
    email: string;
    phone: string;
    socialAccounts: {};
  } = {
    name: '',
    email: '',
    phone: '',
    socialAccounts: {},
  };
  ngOnInit(): void {}
}
