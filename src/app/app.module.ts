import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { CounterComponent } from './counter/counter.component';
import { FormsModule } from '@angular/forms';  //included in training

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule //included in training
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
