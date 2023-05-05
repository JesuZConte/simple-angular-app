import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {


  private _lastAccessed = '';

  @Input()
  get lastAccessed(): string {
    return this._lastAccessed;
  }

  set lastAccessed(value: string) {
    this._lastAccessed = value;
  }


}
