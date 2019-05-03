import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  config = {
    primaryColor: "#f3f3f3",
    secondaryColor: "#ecebeb"
  };
}
