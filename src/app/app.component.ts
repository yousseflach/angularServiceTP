import { Component, OnInit } from '@angular/core';

import { AcountService } from './acount.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angularServiceTp';
  accounts: {title: string, status: string}[] = [];

  constructor(private acservice: AcountService){}

  ngOnInit(): void {
      this.accounts = this.acservice.acounts;
  }
}
