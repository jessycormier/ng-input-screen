import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

// relative pathing for stackBlitz & not having to ng build the lib each time
import { InputScreenModule } from '../../projects/ng-input-screen/src/lib/input-screen.module';
// import { InputScreenModule } from 'ng-input-screen';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    InputScreenModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
