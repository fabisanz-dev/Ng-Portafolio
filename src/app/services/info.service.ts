//import { HttpClient } from '@angular/common/http';
import { HttpModule, Http } from '@angular/http';
import { Injectable } from '@angular/core';
//import { Observable } from 'rxjs/Observable';


@Injectable({
  providedIn: 'root'
})
export class InfoService {

  info:any = [];
  constructor(
    public _http: Http
  ) {
    this._http.get("../../assets/data/info.json")
    .subscribe(
      data=>{
        //console.log(data.json());
        this.info = data.json();
        //console.log(this.info)
      }
    )
   }
  
}
