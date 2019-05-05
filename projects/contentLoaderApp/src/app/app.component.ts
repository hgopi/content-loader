import { Component, AfterViewChecked } from '@angular/core';
import { ContentLoaderConfig } from 'projects/content-loader/src/public-api';
import { HighlightService } from './highlight.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewChecked {

  constructor(private highlight: HighlightService) {
  }

  config: ContentLoaderConfig = {
    primaryColor: '#f3f3f3',
    secondaryColor: '#ecebeb'
  };

  ngAfterViewChecked(): void {
    this.highlight.highlightAll();
  }

}
