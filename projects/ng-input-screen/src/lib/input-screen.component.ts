import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'ng-input-screen',
  templateUrl: './input-screen.component.html',
  changeDetection: ChangeDetectionStrategy.Default
})
export class InputScreenComponent {

  @ViewChild('inputScreen', { static: true }) inputScreen: ElementRef;

  @Output() screenBlur = new EventEmitter();
  @Output() screenFocus = new EventEmitter();
  @Output() screenKeydown = new EventEmitter();
  @Output() screenKeypress = new EventEmitter();
  @Output() screenKeyup = new EventEmitter();

  @Input() screenCharacter = '•';
  @Input() value = '';
  @Input() ngClass: NgClass;

  get screen() {
    return this.screenCharacter.repeat(this.value.length);
  }

  onBlur(el: any) {
    this.screenBlur.emit();
    this.value = el.value;
    el.value = '';
  }

  onFocus(el: any) {
    this.screenFocus.emit();
    el.value = this.value;
  }

  onKeydown(event) {
    this.screenKeydown.emit(event);
  }

  onKeypress(event) {
    this.screenKeypress.emit(event);
  }

  onKeyup(event) {
    this.screenKeyup.emit(event);
    this.value = this.inputScreen.nativeElement.value;
  }

}
