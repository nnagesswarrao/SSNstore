/* eslint-disable @typescript-eslint/naming-convention */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface BookDt {

  title: string;
  id: number;
  discription: string;
  img: string;
  cost: number;

};

@Injectable({
  providedIn: 'root'
})


export class ApiService {
  BookStrore: any = [];

  private BookData: BookDt[] = [

    {
      title: 'string',
      id: 1,
      discription: 'string',
      img: '../../assets/images/book.png',
      cost: 150
    }, {
      title: 'string',
      id: 2,
      discription: 'string',
      img: '../../assets/images/book.png',
      cost: 250
    },
    {
      title: 'string',
      id: 1,
      discription: 'string',
      img: '../../assets/images/book.png',
      cost: 150
    }, {
      title: 'string',
      id: 2,
      discription: 'string',
      img: '../../assets/images/book.png',
      cost: 250
    },

    {
      title: 'string',
      id: 1,
      discription: 'string',
      img: '../../assets/images/book.png',
      cost: 150
    }, {
      title: 'string',
      id: 2,
      discription: 'string',
      img: '../../assets/images/book.png',
      cost: 250
    },
    {
      title: 'string',
      id: 1,
      discription: 'string',
      img: '../../assets/images/book.png',
      cost: 150
    }, {
      title: 'string',
      id: 2,
      discription: 'string',
      img: '../../assets/images/book.png',
      cost: 250
    }

  ];

  constructor(private Http: HttpClient) {

  }

  getMethod() {

    return this.BookData;

  }
}
