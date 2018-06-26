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
  public itemsData:any[];
  public itemsSearched:any[];


  constructor(
    public data : InfoService,
    private _items: ProductosService,
    private _router:Router
    ){
    this.searchKey = "hfghf";

    this.search = new FormControl();
    this.itemsData = [];
    this.itemsSearched = [];


  }

  ngOnInit() {
    console.log(this.searchKey)

    this.search.valueChanges.subscribe(
      searchKey => {

        this._router.navigate( ['buscar', searchKey ]);


        //console.log(searchKey);
        
        /*this.itemsData = this._items.dataProducto;

        //filtra nombre y apellido del usuario 
        this.itemsSearched = this.itemsData.filter(x => (x.titulo + x.categoria).toLowerCase().includes(searchKey.toLowerCase()));*/

        //console.log(this.itemsSearched);
    });

  }

 
      

}
