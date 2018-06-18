import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ExceptionRoutingModule } from './exception-routing.module';
import { SplunkApiService } from './splunk-api.service';

@NgModule({
  imports: [
    CommonModule,
    ExceptionRoutingModule,
    HttpClientModule
  ],
  declarations: [],
  providers:[SplunkApiService]
})
export class ExceptionModule { }
