import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { AppComponent } from "./app.component";
import { QuoteBoxComponent } from "./quote-box/quote-box.component";
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [AppComponent, QuoteBoxComponent, HeaderComponent],
  imports: [BrowserModule, FormsModule, HttpModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
