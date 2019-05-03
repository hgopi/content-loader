import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "lib-content-loader",
  templateUrl: "./content-loader.component.html",
  styles: []
})
export class ContentLoaderComponent implements OnInit {
  defaultConfig = {
    animate: true,
    ariaLabel: "Loading content...",
    baseUrl: "",
    height: 130,
    interval: 0.25,
    preserveAspectRatio: "none",
    primaryColor: "#f0f0f0",
    primaryOpacity: 1,
    rtl: false,
    secondaryColor: "#e0e0e0",
    speed: 2,
    style: {},
    width: 400
  };

  @Input() config: any;

  constructor() {}

  ngOnInit() {
    this.config = Object.assign({}, this.defaultConfig, this.config);
    console.log(this.config);
  }

  getViewbox() {
    return `0 0 ${this.config.width} ${this.config.height}`;
  }
}
