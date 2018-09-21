import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Imports
import { HttpClientModule }    from '@angular/common/http';

// Services
import { ApiScryfallService } from './shared/service/api-scryfall.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    ApiScryfallService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
