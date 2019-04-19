import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SmartComponent } from './smart/smart.component';
import { DumbComponent } from './dumb/dumb.component';
import { MakeBiggerDirective } from './make-bigger.directive';
import { IsVisibleDirective } from './is-visible.directive';


@NgModule({
  declarations: [
    AppComponent,
    SmartComponent,
    DumbComponent,
    MakeBiggerDirective,
    IsVisibleDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
