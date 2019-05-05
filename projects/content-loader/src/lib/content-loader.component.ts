import { Component, OnInit, Input, SecurityContext } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ContentLoaderConfig } from './content-loader.config';

@Component({
  selector: 'lib-content-loader',
  templateUrl: './content-loader.component.html',
  styles: []
})
export class ContentLoaderComponent implements OnInit {
  defaultConfig: ContentLoaderConfig = {
    animate: true,
    ariaLabel: 'Loading content...',
    gradientRatio: 2,
    height: 400,
    idClip: this.uid(),
    idGradient: this.uid(),
    interval: 0.25,
    preserveAspectRatio: 'none',
    primaryColor: '#f0f0f0',
    primaryOpacity: 1,
    rtl: false,
    secondaryColor: '#e0e0e0',
    secondaryOpacity: 1,
    speed: 1,
    style: '',
    width: 1300
  };

  @Input() config: ContentLoaderConfig;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.config = Object.assign({}, this.defaultConfig, this.config);
    console.log(this.config);
  }

  getViewbox() {
    return `0 0 ${this.config.width} ${this.config.height}`;
  }

  getSVGStyle() {
    const style = (this.config.rtl ? 'transform: scaleX(-1)' : '') + this.config.style;
    return this.sanitizer.bypassSecurityTrustStyle(style);
  }

  getStyleAttr() {
    return this.sanitizer.bypassSecurityTrustStyle(`fill: url("#${this.config.idGradient}")`);
  }

  getStep1Values() {
    const { gradientRatio } = this.config;
    return `${-gradientRatio}; ${-gradientRatio}; 1`;
  }

  getStep2Values() {
    const { gradientRatio } = this.config;
    return `${-gradientRatio / 2}; ${-gradientRatio / 2}; 1`;
  }

  getStep3Values() {
    const { gradientRatio } = this.config;
    return `0; 0; ${1 + gradientRatio};`;
  }

  getKeytimes() {
    return `0; ${this.config.interval}; 1`;
  }

  getDur() {
    return `${this.config.speed}s`;
  }

  uid(): string {
    return Math.random().toString(36).substring(2);
  }
  // https://stackoverflow.com/questions/45846147/angular-2-how-to-have-an-svg-in-app-component-and-a-circle-as-a-child-comp?rq=1
}
