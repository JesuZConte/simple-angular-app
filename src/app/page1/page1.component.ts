import { Component } from '@angular/core';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component {
  pageName = 'Page 1';

  onButtonClick() : void {
    alert('Hello');
  }

  // mouseOver() : void {
  //   alert('Your mouse is over this element!');
  // }



}
