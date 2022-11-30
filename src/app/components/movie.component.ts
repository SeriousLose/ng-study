
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Actor } from '../actor.model';

@Component({
  selector: 'app-movie',
  template: `
    <div>
      <h3>{{ title }}</h3>
      <p>
        <label>Actor:</label>
        <span>{{actor.firstName}} | {{actor.lastName}}</span>
      </p>
    </div>`,
     changeDetection: ChangeDetectionStrategy.OnPush // 显示调用Onpush策略
})
export class MovieComponent {
  @Input() title: string;
  @Input() actor: Actor;
}
