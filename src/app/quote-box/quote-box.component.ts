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

  whatDayIsIt() {
    if (this.day == 1) {
      return console.log("The day is Monday");
    } else if (this.day == 2) {
      return console.log("The day is Tuesday");
    } else if (this.day == 3) {
      return console.log("The day is Wednesday");
    } else if (this.day == 4) {
      return console.log("The day is Thursday");
    } else if (this.day == 5) {
      return console.log("The day is Friday");
    } else if (this.day == 6) {
      return console.log("the day is Saturday");
    } else {
      return console.log("The day is Sunday.");
    }
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
