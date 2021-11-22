import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.less'],
})
export class ParentComponent implements OnInit {
  public num = 1;

  constructor() {}

  ngOnInit() {
    setInterval(() => {
      this.num++;
    }, 1000);
  }
}
