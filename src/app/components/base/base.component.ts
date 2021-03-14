import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'l-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.less']
})
export class BaseComponent implements OnInit {

  @Input() bb = 'SeriousLose';

  public aa = 'aa';

  constructor() { }

  ngOnInit() {
  }

}
