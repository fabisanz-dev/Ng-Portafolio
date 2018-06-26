import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { InfoService } from '../../services/info.service';


import { FormControl } from '@angular/forms';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public searchKey:any;

  public search: FormControl;

  constructor(
    public data : InfoService,
    private _router:Router
    ){
    this.search = new FormControl();

  }

  ngOnInit() {

    this.search.valueChanges.subscribe(
      searchKey => {
        this._router.navigate( ['buscar', searchKey ]);
    });

  }

 
      

}
