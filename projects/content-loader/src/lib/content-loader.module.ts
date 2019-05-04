import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { ContentLoaderComponent } from './content-loader.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ContentLoaderComponent],
  imports: [
    CommonModule
  ],
  exports: [ContentLoaderComponent],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class ContentLoaderModule { }
