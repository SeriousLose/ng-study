import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges
} from '@angular/core';

// tslint:disable-next-line:no-conflicting-lifecycle
@Component({
  selector: 'app-abc',
  templateUrl: './abc.component.html',
  styleUrls: ['./abc.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AbcComponent implements OnInit, OnChanges {
  @Input() shuru = { shuru: 0 };

  constructor(private changeDetectorRef: ChangeDetectorRef) {
    this.changeDetectorRef.detach(); // 如果detach, 那么markForCheck就不起作用了
  }

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

  // tslint:disable-next-line:use-lifecycle-interface
  ngDoCheck() {
    console.log('ngDoCheck', this.shuru);
    // this.changeDetectorRef.markForCheck();  // 不detach的时候，这个也可以
    this.changeDetectorRef.detectChanges(); // Checks this view and its children.
  }


  click() {
    console.log('电力');
  }
}
