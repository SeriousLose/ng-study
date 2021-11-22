import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.less'],
})
export class ParentComponent implements OnInit {

  constructor() {}
  public num = 0;

  ngOnInit() {
  }

  numberIChange(i:number){
      this.num = i;
  }
}
