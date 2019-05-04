import { BrowserModule } from "@angular/platform-browser";
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";

import { AppComponent } from "./app.component";
import { ContentLoaderModule } from "content-loader";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ContentLoaderModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }
