import { Component, OnInit } from "@angular/core";
@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  title = "||Quote of The Day||";
  constructor() {}

  ngOnInit() {}
}
