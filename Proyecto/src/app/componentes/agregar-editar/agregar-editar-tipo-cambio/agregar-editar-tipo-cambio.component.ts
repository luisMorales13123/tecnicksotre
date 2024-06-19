import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TipocambioService } from '../../../servicios/TipoCambio/tipocambio.service';
import { tipocambio } from '../../../interfaces/TipoCambio/TipoCambio';

@Component({
  selector: 'app-agregar-editar-tipo-cambio',
  templateUrl: './agregar-editar-tipo-cambio.component.html',
  styleUrl: './agregar-editar-tipo-cambio.component.css'
})

export class AgregarEditarTipoCambioComponent {
  form: FormGroup;
  loading: boolean = false;
  id: number;
  operacion: string = 'Agregar ';

  constructor(private fb: FormBuilder,
    private _productService: TipocambioService,
    private router: Router,
    private toastr: ToastrService,
    private aRouter: ActivatedRoute) {
    this.form = this.fb.group({
      TipoCambio: ['', Validators.required],

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
    this._productService.getProduct(id).subscribe((data: tipocambio) => {
      this.loading = false;
      this.form.setValue({
        id: data.id,
        TipoCambio: data.TipoCambio,

      })
    })
  }

  addProduct() {
    /*  console.log(this.form.value.name);
     console.log(this.form.get('name')?.value); */

    const product: tipocambio = {
      id:this.form.value.id,
      TipoCambio: this.form.value.TipoCambio,

    }
    this.loading = true;

    if (this.id !== 0) {
      // Es editar
      product.id = this.id;
      this._productService.updateProdcut(this.id, product).subscribe(() => {
        this.toastr.info(`El producto ${product.TipoCambio} fue actualizado con exito`, 'Producto actualizado');
        this.loading = false;
        this.router.navigate(['/TipoCambio']);
      })

    } else {
      // Es agregagar
      this._productService.saveProducto(product).subscribe(() => {
        this.toastr.success(`El producto ${product.TipoCambio} fue registrado con exito`, 'Producto registrado');
        this.loading = false;
        this.router.navigate(['/TipoCambio']);
      })
    }




  }
}
