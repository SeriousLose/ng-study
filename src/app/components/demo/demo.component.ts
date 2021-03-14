import { Component, ContentChildren, OnInit, QueryList, SimpleChanges, TemplateRef } from '@angular/core';



@Component({
  selector: 'fl-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.less']
})
export class DemoComponent implements OnInit {

  @ContentChildren(TemplateRef) angular: QueryList<any>;
  // @ContentChild() childOne: any;
  public name = "鲁王";
  ctx = { name: this.name };

  _monthData = 11;

  set monthData(monthData: any) {
    this._monthData = monthData;
  }

  get monthData(): any { return this._monthData; }

  constructor() {
    console.log(111111111111)
  }

  ngOnInit() {
    setTimeout(() => {
      console.log(22222222);
      this.name = '11111111111';
    }, 5000);


  }
  aa() {
    console.log(2222)
    this.name = '1111111111111';
    console.log(this.angular);
  }
  changeName(a, b) {
    console.log(a, b);

  }

  angularChange(){
    console.log(this.angular);

  }

  changesName(a, b) {
    console.log(a, b);

  }
  nameChanges(a, b) {
    console.log(a, b)
  }
  nameChange(a,b){
    console.log(a,b)
  }


  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    // current 属性值变更时
    if (changes.angular) {
      // this.getData();
      // debugger
      console.log(changes)
    }
  }


}
