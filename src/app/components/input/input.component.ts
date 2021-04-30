import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.less']
})
export class InputComponent implements OnInit {

  shuru = {
    shuru: 1
  };
  constructor() {
    setInterval(() => {
      this.shuru.shuru++;
    }, 1111);
  }

  ngOnInit() {
  }

}
