import { ChangeDetectionStrategy, Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'ng-input-screen',
  templateUrl: './input-screen.component.html',
  changeDetection: ChangeDetectionStrategy.Default
})
export class InputScreenComponent {

  @Input() screenCharacter = '•';
  @Input()  value = '';

  get screen() {
    return this.screenCharacter.repeat(this.value.length);
  }

  onBlur(el: any) {
    this.value = el.value;
    el.value = '';
  }

  onFocus(el: any) {
    el.value = this.value;
  }

}
