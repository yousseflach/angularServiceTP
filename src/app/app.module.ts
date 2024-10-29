import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AcountComponent } from './acount/acount.component';
import { AcountService } from './acount.service';
import { NewAcountComponent } from './new-acount/new-acount.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AcountComponent,
    NewAcountComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [AcountService],
  bootstrap: [AppComponent]
})
export class AppModule { }
