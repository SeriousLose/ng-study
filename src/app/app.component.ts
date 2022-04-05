import { AfterViewInit, Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent  implements  AfterViewInit{
  title = 'ng-study';
  constructor(private elementRef: ElementRef) {}

  // 模板中的元素已创建完成
  ngAfterViewInit() {
    console.dir(this.elementRef.nativeElement.querySelector('div'));
  }
}
