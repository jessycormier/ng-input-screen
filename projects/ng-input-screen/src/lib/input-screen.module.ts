import { NgModule } from '@angular/core';
import { InputScreenComponent } from './input-screen.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [ CommonModule ],
  declarations: [InputScreenComponent],
  exports: [InputScreenComponent]
})
export class InputScreenModule { }
