import {Component} from '@angular/core';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component {

  private _hits: number = 0;
  get hits(): number {
    return this._hits;
  }

  set hits(value: number) {
    this._hits = value;
  }

  incrementHitCounter() {
    this.hits++;
  }
}
