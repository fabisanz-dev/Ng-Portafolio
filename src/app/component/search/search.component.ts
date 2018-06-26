import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public itemsData:any[];
  public itemsSearched:any[];

  constructor( private _actRoute: ActivatedRoute, private _productos: ProductosService ) { 
    this.itemsData = [];
    this.itemsSearched = [];
  }

  ngOnInit() {
 
    this._actRoute.params.subscribe(
      param => {
        this.itemsData = this._productos.dataProducto;

        //filtra nombre y apellido del usuario 
        this.itemsSearched = this.itemsData.filter(x => (x.titulo + x.categoria).toLowerCase().includes(param['termino'].toLowerCase()));

        console.log(this.itemsSearched);
      });

  }

  

}
