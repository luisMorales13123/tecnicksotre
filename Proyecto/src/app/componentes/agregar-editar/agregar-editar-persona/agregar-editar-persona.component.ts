import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { personaService } from '../../../servicios/Persona/Persona.service';
import { persona } from '../../../interfaces/Persona/Persona';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-agregar-editar-persona',
  templateUrl: './agregar-editar-persona.component.html',
  styleUrl: './agregar-editar-persona.component.css'
})
export class AgregarEditarPersonaComponent {
  form: FormGroup;
  loading: boolean = false;
  id: number;
  operacion: string = 'Agregar ';

  constructor(private fb: FormBuilder,
    private _productService: personaService,
    private router: Router,
    private toastr: ToastrService,
    private aRouter: ActivatedRoute) {
    this.form = this.fb.group({
      pNombre: ['', Validators.required],
      sNombre: ['', Validators.required],
      pApellido: ['', Validators.required],
      sApellido: ['', Validators.required],
      Telefono: ['', Validators.required],
      Documento: ['', Validators.required],
      FechaNacimiento: ['', Validators.required],
      TelefonoAux: ['', Validators.required],
      TipoDocumento: [null, Validators.required]
  


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
    this._productService.getProduct(id).subscribe((data: persona) => {
      this.loading = false;
      this.form.setValue({
        id: data.id,
        pNombre: data.pNombre,
        sNombre: data.sNombre,
        pApellido: data.pApellido,
        sApellido: data.sApellido,
        Telefono: data.Telefono,
        Documento: data.Documento,
        FechaNacimiento: data.FechaNacimiento,
        TelefonoAux: data.TelefonoAux,
        TipoDocumento: data.TipoDocumento,
        

      })
    })
  }

  addProduct() {
    /*  console.log(this.form.value.name);
     console.log(this.form.get('name')?.value); */

    const product: persona = {
      id:this.form.value.id,
      pNombre: this.form.value.pNombre,
      sNombre:this.form.value.sNombre,
      pApellido: this.form.value.pApellido,
      sApellido:this.form.value.sApellido,
      Telefono: this.form.value.Telefono,
      Documento:this.form.value.Documento,
      FechaNacimiento: this.form.value.FechaNacimiento,
      TelefonoAux:this.form.value.TelefonoAux,
      TipoDocumento: this.form.value.TipoDocumento,
      

    }
    this.loading = true;

    if (this.id !== 0) {
      // Es editar 
      product.id = this.id;
      this._productService.updateProdcut(this.id, product).subscribe(() => {
        this.toastr.info(`El producto ${product.pNombre} fue actualizado con exito`, 'Producto actualizado');
        this.loading = false;
        this.router.navigate(['/producto']);
      })

    } else {
      // Es agregagar
      this._productService.saveProducto(product).subscribe(() => {
        this.toastr.success(`El producto ${product.pNombre} fue registrado con exito`, 'Producto registrado');
        this.loading = false;
        this.router.navigate(['/producto']);
      })
    }




  }

}
