import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.less']
})
export class TextareaComponent implements OnInit {

  public value:string;

  constructor() { }

  ngOnInit (): void {
  }

  getCaretPosWithEvent (event: { target: any; }) {
    const target = event.target;
    if (target.selectionStart || target.selectionStart === 0) {
      console.log(target.selectionStart);
    }
  }

}
