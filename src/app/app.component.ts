import { Component } from '@angular/core';
import { InfoService } from './services/info.service';

import { ProductosService } from './services/productos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  
  constructor(
    public data : InfoService,
    private _items: ProductosService
  )
  {}

  ngOnInit() {
  
  }
}
