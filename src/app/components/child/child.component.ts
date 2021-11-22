import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.less'],
})
export class ChildComponent implements OnInit {

  @Output() changeNumber: EventEmitter<number> = new EventEmitter();

  Number = 0;
  constructor() {}

  ngOnInit() {
    setInterval(() => {
      this.changeNumber.emit(++this.Number);
    }, 1000)
  }
}
