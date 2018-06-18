import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {map} from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SplunkApiService {

  constructor (public http : HttpClient) { 
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Splunk 18bf07dd-2b85-4da7-b125-41afe94a233f' });

      console.log(headers);
      const body = JSON.stringify({
          event: 'From Angular',
          source: "Angular POC",
      });
      this.http.post('http://localhost:8088/services/collector', body, { headers: headers })
      .subscribe(
          res => console.log(res),
          error => console.log("error")
          
      );


    // let headers = new HttpHeaders({
    //   "Content-type": "application/json; charset=UTF-8"
    // });

    //   console.log(headers);
    //   const body = JSON.stringify({
    //     title: 'foo',
    //     body: 'bar',
    //     userId: 1
    //   });
    //   this.http.post('https://jsonplaceholder.typicode.com/posts', body, { headers: headers })
    //   .subscribe(
    //       res => console.log(res),
    //       error => console.log("error")
          
    //   );



      // .catch(
      //   (error: Response) => {
      //       console.log(error.status)
      //       return Observable.throw('Something went wrong');
      //   }
      // );

      }

      getName = ()=> "Demo App";
    
  }


