import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ScreenComponent } from './components/screen/screen.component';
import { OperatorComponent } from './components/operator/operator.component';

@NgModule({
  declarations: [
    AppComponent,
    ScreenComponent,
    OperatorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
