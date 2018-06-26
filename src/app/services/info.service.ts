//import { HttpClient } from '@angular/common/http';
import { HttpModule, Http } from '@angular/http';
import { Injectable } from '@angular/core';
//import { Observable } from 'rxjs/Observable';


@Injectable({
  providedIn: 'root'
})
export class InfoService {

  info:any = [];
  dataTeam:any[] = [];
  constructor(
    public _http: Http
  ) {
    this.getInfo();
    this.getDataTeam();
   }

  getInfo(){
    this._http.get("../../assets/data/info.json")
    .subscribe(
      data=>{
        //console.log(data.json());
        this.info = data.json();
        //console.log(this.info)
      }
    )
  }

  getDataTeam(){
    this._http.get("https://portaf-test.firebaseio.com/equipo.json")
    .subscribe(
      data=>{
       
        this.dataTeam = data.json();
        //console.log(this.dataTeam)
      }
    )
  }
  
}
