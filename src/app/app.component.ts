import { Component } from "@angular/core";
import { QuoteBoxComponent } from "./quote-box/quote-box.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Quote of the Day!";
}
