import { Routes } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent implements OnInit {
  public dataItems:any[];
  loadingProductos:boolean;
  constructor(
    private data:ProductosService
  ) { 
    this.dataItems = [];
    this.loadingProductos = true;
  }

  ngOnInit() {
    this.data.getProductos().subscribe(
      (data)=>{
         this.loadingProductos = false;
         this.dataItems = data;
         
      }
    )
  }

  
}


