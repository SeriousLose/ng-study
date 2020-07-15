import { Component, OnInit, ContentChild, TemplateRef, ContentChildren, QueryList } from '@angular/core';



@Component({
  selector: 'fl-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.less']
})
export class DemoComponent implements OnInit {

  @ContentChildren(TemplateRef) angular: QueryList<any>;
  // @ContentChild() childOne: any;

  constructor() { }

  ngOnInit() {

  }
  aa(){
    console.log(this.angular);
  }
  name = "鲁王";
  ctx = {name: this.name};


}
