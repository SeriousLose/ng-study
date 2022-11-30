import { AfterViewInit, Component, ElementRef } from '@angular/core';
import { Actor } from './actor.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent  implements  AfterViewInit{
  constructor(private elementRef: ElementRef) {}
  title = 'ng-study';

  slogan = 'Just movie information';
  // title = 'Terminator 1';
  actor = new Actor('Arnold', 'Schwarzenegger');

  // 模板中的元素已创建完成
  ngAfterViewInit() {
    console.dir(this.elementRef.nativeElement.querySelector('div'));
  }
  aa(){
    console.log(111)
  }

  changeActorProperties() {
    this.actor.firstName = 'Nicholas';
    this.actor.lastName = 'Cage';
    this.title = 'seriousLose';
  }

  changeActorObject() {
    this.actor = new Actor('Bruce', 'Willis');
  }

}
