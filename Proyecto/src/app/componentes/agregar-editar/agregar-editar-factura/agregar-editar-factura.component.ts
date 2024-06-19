import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { facturaService } from '../../../servicios/Factura/factura.service';
import { factura } from '../../../interfaces/Factura/Factura';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-agregar-editar-factura',
  templateUrl: './agregar-editar-factura.component.html',
  styleUrl: './agregar-editar-factura.component.css'
})
export class AgregarEditarFacturaComponent {
  form: FormGroup;
  loading: boolean = false;
  id: number;
  operacion: string = 'Agregar ';

  constructor(private fb: FormBuilder,
    private _productService: facturaService,
    private router: Router,
    private toastr: ToastrService,
    private aRouter: ActivatedRoute) {
    this.form = this.fb.group({
      idServicio: ['', Validators.required],
      idDuenoFactura: ['', Validators.required],
      FechaFactura: ['', Validators.required],
      CostoTotal: ['', Validators.required],
      TiempoGarantia: ['', Validators.required],
     
    })
    this.id = Number(aRouter.snapshot.paramMap.get('id'));
  }
  ngOnInit(): void {

    if (this.id != 0) {
      // Es editar
      this.operacion = 'Editar ';
      this.getProduct(this.id);
    }
  }

  getProduct(id: number) {
    this.loading = true;
    this._productService.getProduct(id).subscribe((data: factura) => {
      this.loading = false;
      this.form.setValue({
        id: data.id,
        idServicio: data.idServicio,
        idDuenoFactura: data.idDuenoFactura,
        FechaFactura: data.FechaFactura,
        CostoTotal: data.CostoTotal,
        TiempoGarantia: data.TiempoGarantia,
       

      })
    })
  }

  addProduct() {
    /*  console.log(this.form.value.name);
     console.log(this.form.get('name')?.value); */

    const product: factura = {
      id:this.form.value.id,
      idServicio: this.form.value.idServicio,
      idDuenoFactura:this.form.value.idDuenoFactura,
      FechaFactura: this.form.value.FechaFactura,
      CostoTotal:this.form.value.CostoTotal,
      TiempoGarantia: this.form.value.TiempoGarantia,
     
    }
    this.loading = true;

    if (this.id !== 0) {
      // Es editar 
      product.id = this.id;
      this._productService.updateProdcut(this.id, product).subscribe(() => {
        this.toastr.info(`El producto ${product.id} fue actualizado con exito`, 'Producto actualizado');
        this.loading = false;
        this.router.navigate(['/Factura']);
      })

    } else {
      // Es agregagar
      this._productService.saveProducto(product).subscribe(() => {
        this.toastr.success(`El producto ${product.id} fue registrado con exito`, 'Producto registrado');
        this.loading = false;
        this.router.navigate(['/Factura']);
      })
    }




  }

}
