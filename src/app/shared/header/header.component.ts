import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  notification: number;

  constructor() {
    this.notification = 1;
  }

  ngOnInit(): void {
  }

}
