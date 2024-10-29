import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AcountComponent } from './acount/acount.component';
import { AcountService } from './acount.service';

@NgModule({
  declarations: [
    AppComponent,
    AcountComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [AcountService],
  bootstrap: [AppComponent]
})
export class AppModule { }
