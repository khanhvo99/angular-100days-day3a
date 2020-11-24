import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular " + VERSION.major;
  user = {
    name: "Khanh",
    age: "21"
  };
  handler(event) {
    console.log("Clicked", event);
  }
}
