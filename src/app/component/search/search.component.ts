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
  public itemsSaved:any[];

  constructor( private _actRoute: ActivatedRoute, private _productos: ProductosService ) { 
    this.itemsData = [];
    this.itemsSearched = [];
    this.itemsSaved = [];
  }

  ngOnInit() {
 
    this._actRoute.params.subscribe(
      param => {
         this._productos.getProductos()
         .subscribe( data => { 
           this.itemsData = data;
        //console.log(this.itemsData)
        sessionStorage.setItem('itemSearch', JSON.stringify(this.itemsData));
       });

        this.itemsSaved = JSON.parse(sessionStorage.getItem('itemSearch'));

        //filtra nombre y apellido del usuario 
        this.itemsSearched = this.itemsSaved.filter(x => (x.titulo + x.categoria).toLowerCase().includes(param['termino'].toLowerCase()));

       // console.log(this.itemsSearched);
        
        
      }
    );
   

  }

  

}
