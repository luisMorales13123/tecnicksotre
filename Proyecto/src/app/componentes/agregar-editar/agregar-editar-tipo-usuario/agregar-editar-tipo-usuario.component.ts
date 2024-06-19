import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { tipousuarioService } from '../../../servicios/TipoUsuario/TipoUsuario.service';
import { tipousuario } from '../../../interfaces/TipoUsuario/TipoUsuario';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-agregar-editar-tipo-usuario',
  templateUrl: './agregar-editar-tipo-usuario.component.html',
  styleUrl: './agregar-editar-tipo-usuario.component.css'
})
export class AgregarEditarTipoUsuarioComponent {
  form: FormGroup;
  loading: boolean = false;
  id: number;
  operacion: string = 'Agregar ';

  constructor(private fb: FormBuilder,
    private _productService: tipousuarioService,
    private router: Router,
    private toastr: ToastrService,
    private aRouter: ActivatedRoute) {
    this.form = this.fb.group({
      Usuario: ['', Validators.required],

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
    this._productService.getProduct(id).subscribe((data: tipousuario) => {
      this.loading = false;
      this.form.setValue({
        id: data.id,
        Usuario: data.TipoUsuario,

      })
    })
  }

  addProduct() {
    /*  console.log(this.form.value.name);
     console.log(this.form.get('name')?.value); */

    const product: tipousuario = {
      id:this.form.value.id,
      TipoUsuario: this.form.value.Usuario,

    }
    this.loading = true;

    if (this.id !== 0) {
      // Es editar 
      product.id = this.id;
      this._productService.updateProdcut(this.id, product).subscribe(() => {
        this.toastr.info(`El producto ${product.TipoUsuario} fue actualizado con exito`, 'Producto actualizado');
        this.loading = false;
        this.router.navigate(['/Usuario']);
      })

    } else {
      // Es agregagar
      this._productService.saveProducto(product).subscribe(() => {
        this.toastr.success(`El producto ${product.TipoUsuario} fue registrado con exito`, 'Producto registrado');
        this.loading = false;
        this.router.navigate(['/Usuario']);
      })
    }




  }
}
