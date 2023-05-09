import {Component, OnInit} from '@angular/core';
import {DataService} from "../data.service";
import {Book} from "../model/Book";

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {
  pageName = 'Page 1';
  books?: Array<Book>;

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.books = this.dataService.books;
  }

  onButtonClick(): void {
    alert('Hello');
  }

  // mouseOver() : void {
  //   alert('Your mouse is over this element!');
  // }


}
