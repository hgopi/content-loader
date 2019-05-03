import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { ContentLoaderModule } from "content-loader";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ContentLoaderModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
