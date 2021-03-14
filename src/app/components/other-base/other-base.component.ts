import { Component } from '@angular/core';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'l-other-base',
  templateUrl: './other-base.component.html',
  styleUrls: ['./other-base.component.less']
  // styleUrls: BaseComponent.styleUrls.concat(["./other.component.less"])
  // styleUrls: ['./base/base.component.css', "./other.component.less"]
})
export class OtherBaseComponent extends BaseComponent {
  aa = 'bb';
}
