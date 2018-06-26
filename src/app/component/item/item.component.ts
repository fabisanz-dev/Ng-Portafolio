import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  item:any[] = [];
  codigo:any;

  constructor(
    private _actRoute: ActivatedRoute,
    private _productoData: ProductosService
  )
  {
    this._actRoute.params.subscribe(
      param => {
        //console.log(param['id'])
        this._productoData.getProducto(param['id']).subscribe(
          data =>{
            this.codigo = param['id'];
            this.item = data;
            console.log(this.item)
          }
        )
      });
    
  }

  ngOnInit() {
  }

}
