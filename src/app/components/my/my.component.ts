import { Component } from '@angular/core';
import { BaseComponent } from './base';

@Component({
  selector: 'app-my',
  templateUrl: './my.component.html',
  styleUrls: ['./my.component.less'],
})
export class MyComponent extends BaseComponent {
  protected getName(): string {
    return 'MyComponent';
  }
}
