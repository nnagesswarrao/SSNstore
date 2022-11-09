/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/providers/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  Bookdata: any=[];
imge='../../../assets/images/book.png';
  constructor(private api: ApiService) { }

  ngOnInit() {

this.Bookdata=this.api.getMethod();

console.log(this.Bookdata);
  }

}
