import {
  ChangeDetectionStrategy, Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-abc',
  templateUrl: './abc.component.html',
  styleUrls: ['./abc.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AbcComponent implements OnInit, OnChanges {
  @Input() shuru = {shuru: 0};

  constructor() {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges): void {
    // tslint:disable-next-line:forin
    for (const propName in changes) {
      const itemValue = changes[propName];
      const currentValue = JSON.stringify(itemValue.currentValue);
      const previousValue = JSON.stringify(itemValue.previousValue);
      console.log(
        `${propName}: currentValue = ${currentValue}, previousValue = ${previousValue}`
      );
    }
  }
}
