import { Component, HostBinding, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'button[appButton]',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.css',
})
export class Button {
  ngOnInit() {
    console.log('Worked');
  }
}
