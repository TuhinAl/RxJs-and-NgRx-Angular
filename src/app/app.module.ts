import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RxJSLearnComponent } from './rx-js-learn/rx-js-learn.component';
import { RxjsOperatorComponent } from './rxjs-operator/rxjs-operator.component';

@NgModule({
  declarations: [
    AppComponent,
    RxJSLearnComponent,
    RxjsOperatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
