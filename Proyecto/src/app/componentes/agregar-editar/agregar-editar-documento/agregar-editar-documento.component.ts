import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { tipodedocumento } from '../../../interfaces/TipoDocumento/TipoDocumento';
import { DocuemntoService } from '../../../servicios/TipoDocumento/TipoDocumento.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-agregar-editar-documento',
  templateUrl: './agregar-editar-documento.component.html',
  styleUrl: './agregar-editar-documento.component.css'
})
export class AgregarEditarDocumentoComponent {
  form: FormGroup;
  loading: boolean = false;
  id: number;
  operacion: string = 'Agregar ';

  constructor(private fb: FormBuilder,
    private _productService: DocuemntoService,
    private router: Router,
    private toastr: ToastrService,
    private aRouter: ActivatedRoute) {
    this.form = this.fb.group({
      Documento: ['', Validators.required],

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
    this._productService.getProduct(id).subscribe((data: tipodedocumento) => {
      this.loading = false;
      this.form.setValue({
        id: data.id,
        Documento: data.TipoDocumento,

      })
    })
  }

  addProduct() {
    /*  console.log(this.form.value.name);
     console.log(this.form.get('name')?.value); */

    const product: tipodedocumento = {
      id:this.form.value.id,
      TipoDocumento: this.form.value.Documento,

    }
    this.loading = true;

    if (this.id !== 0) {
      // Es editar 
      product.id = this.id;
      this._productService.updateProdcut(this.id, product).subscribe(() => {
        this.toastr.info(`El producto ${product.TipoDocumento} fue actualizado con exito`, 'Producto actualizado');
        this.loading = false;
        this.router.navigate(['/Documento']);
      })

    } else {
      // Es agregagar
      this._productService.saveProducto(product).subscribe(() => {
        this.toastr.success(`El producto ${product.TipoDocumento} fue registrado con exito`, 'Producto registrado');
        this.loading = false;
        this.router.navigate(['/Documento']);
      })
    }




  }
}
