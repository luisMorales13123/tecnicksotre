import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Marcas } from '../../../interfaces/Marcas/Marcas';
import { MarcasService } from '../../../servicios/marcas/marcas.service';


@Component({
  selector: 'app-agregar-editar-marcas',
  templateUrl: './agregar-editar-marcas.component.html',
  styleUrls: ['./agregar-editar-marcas.component.css']
})
export class AgregarEditarMarcasComponent {
  form: FormGroup;
  loading: boolean = false;
  id: number;
  operacion: string = 'Agregar ';

  constructor(private fb: FormBuilder,
    private _marcasService: MarcasService,
    private router: Router,
    private toastr: ToastrService,
    private aRouter: ActivatedRoute) {
    this.form = this.fb.group({
      Marcas: ['', Validators.required],

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
    this._marcasService.getProduct(id).subscribe((data: Marcas) => {
      this.loading = false;
      this.form.setValue({
        id: data.id,
        Marcas: data.Marcas,

      })
    })
  }

  addProduct() {
    const product: Marcas = {
      id: this.form.value.id,
      Marcas: this.form.value.Marcas,
    }
    this.loading = true;

    if (this.id !== 0) {
      // Es editar 
      product.id = this.id;
      this._marcasService.updateProdcut(this.id, product).subscribe(() => {
        this.toastr.info(`El producto ${product.Marcas} fue actualizado con éxito`, 'Producto actualizado');
        this.loading = false;
        this.router.navigate(['/Marcas']);
      })

    } else {
      // Es agregar
      this._marcasService.saveProducto(product).subscribe(() => {
        this.toastr.success(`El producto ${product.Marcas} fue registrado con éxito`, 'Producto registrado');
        this.loading = false;
        this.router.navigate(['/Marcas']);
      })
    }
  }
}
