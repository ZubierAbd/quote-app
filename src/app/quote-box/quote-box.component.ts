import { Component, OnInit } from "@angular/core";
import { QUOTES } from "app/quote-box/mock-quotes";
@Component({
  selector: "app-quote-box",
  templateUrl: "./quote-box.component.html",
  styleUrls: ["./quote-box.component.css"]
})
export class QuoteBoxComponent implements OnInit {
  dt = new Date();
  day = this.dt.getDay();
  display_quote = {};
  constructor() {
    var dt = new Date();
    var day = dt.getDay();
    this.display_quote = QUOTES[day];
  }

  dayIncrement(day) {
    day += 1;

    console.log("the number is now " + day);
    if (day == 7) {
      day = 0;
      console.log("the number is now " + day);
    }
    this.day = day;
    this.display_quote = QUOTES[day];
  }
  ngOnInit() {}
}
