import { Component, OnInit } from '@angular/core';
import { tipodedocumento } from '../../interfaces/TipoDocumento/TipoDocumento';
import { DocuemntoService } from '../../servicios/TipoDocumento/TipoDocumento.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  listProduct: tipodedocumento[] = []

  constructor(private _productService: DocuemntoService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this._productService.getListProducts().subscribe(data => {
      this.listProduct = data;
    })
  }

}