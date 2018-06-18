import { Component } from '@angular/core';
import { SplunkApiService } from './exception/splunk-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title ;
  constructor(public service : SplunkApiService ){
    this.title = service.getName();
  }

  
}
