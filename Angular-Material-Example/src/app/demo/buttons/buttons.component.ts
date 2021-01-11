import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttons',
  template: `
    <div>
      <button mat-button>
        <mat-icon aria-hidden="false" aria-label="Example home icom">home</mat-icon>
        Click Me!
      </button>
    </div>
    <div>
      <mat-checkbox>Check me!</mat-checkbox>
    </div>
  `,
  styles: [
  ]
})
export class ButtonsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
