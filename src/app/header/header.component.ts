import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  pageRequested = 1;
  @Output()
  pageChangedEvent = new EventEmitter<number>();

  onPageChange(page: number): void {
    this.pageRequested = page;
    console.log(this.pageRequested);
    this.pageChangedEvent.emit(page);
  }

}
