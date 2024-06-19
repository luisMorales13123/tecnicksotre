import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';



//MODULOS
import { FormsModule, ReactiveFormsModule }from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
//COMPONENTES
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { ListarComponent } from './componentes/listar/listarTipoEquipo/listar.component';

import { Error404Component } from './componentes/error404/error404.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ProgressBarComponent } from './shared/progress-bar/progress-bar.component';
import { ListarTipoProductoComponent } from './componentes/listar/listarTipoUsuario/listar-tipo-producto.component';
import { AgregarEditarTipoUsuarioComponent } from './componentes/agregar-editar/agregar-editar-tipo-usuario/agregar-editar-tipo-usuario.component';
import { AgregarEditarComponent } from './componentes/agregar-editar/agregar-editar-TipoEquipo/agregar-editar.component';

import { AgregarEditarDocumentoComponent } from './componentes/agregar-editar/agregar-editar-documento/agregar-editar-documento.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { RegisterComponent } from './componentes/register/register.component';



//Forms
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';

import {MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldModule} from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { ListarTipoDocumentoComponent } from './componentes/listar/listar-tipo-documento/listar-tipo-documento.component';
import { MatIconModule } from '@angular/material/icon';
import { ListarTipoServicioComponent } from './componentes/listar/listarTipoServicio/listar-tipo-servicio.component';
import { AgregarEditarTiposervicioComponent } from './componentes/agregar-editar/agregar-editar-tiposervicio/agregar-editar-tiposervicio.component';
import { ListarTipoCambioComponent } from './componentes/listar/ListarTipocambio/listar-tipo-cambio.component';
import { AgregarEditarTipoCambioComponent } from './componentes/agregar-editar/agregar-editar-tipo-cambio/agregar-editar-tipo-cambio.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { AgregarEditarFacturaComponent } from './componentes/agregar-editar/agregar-editar-factura/agregar-editar-factura.component';
import { ListarFacturaComponent } from './componentes/listar/listar-factura/listar-factura.component';
import { ListarAdministradorComponent } from './componentes/listar/listar-administrador/listar-administrador.component';
import { AgregarEditarAdministradorComponent } from './componentes/agregar-editar/agregar-editar-administrador/agregar-editar-administrador.component'
import { ListarMarcasComponent } from './componentes/listar/listar-marcas/listar-marcas.component';
import { AgregarEditarMarcasComponent } from './componentes/agregar-editar/agregar-editar-marcas/agregar-editar-marcas.component';
import { ListarServicioComponent } from './componentes/listar/listar-servicio/listar-servicio.component';
import { AgregarEditarServiciosComponent } from './componentes/agregar-editar/agregar-editar-servicio/agregar-editar-servicio.component'
import { ListarCargoTecnicoComponent } from './componentes/listar/listar-cargo-tecnico/listar-cargo-tecnico.component';
import { AgregarEditarCargoTecnicoComponent } from './componentes/agregar-editar/agregar-editar-cargo-tecnico/agregar-editar-cargo-tecnico.component';
import { ListaPersonaComponent } from './componentes/listar/lista-persona/lista-persona.component';
import { AgregarEditarPersonaComponent } from './componentes/agregar-editar/agregar-editar-persona/agregar-editar-persona.component';
import { ListarEquipoComponent } from './componentes/listar/listar-equipo/listar-equipo.component';
import { AgregarEditarEquipoComponent } from './componentes/agregar-editar/agregar-editar-equipo/agregar-editar-equipo.component';
import { AddTokenInterceptor } from './utils/add-token.interceptor';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { LoginComponent } from './componentes/login/login.component';
import { SignInComponent } from './componentes/sign-in/sign-in.component';

import { SpinnerComponent } from './shared/spinner/spinner.component';
import { VistaUsuariComponent } from './componentes/vista-usuari/vista-usuari.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListarComponent,
    AgregarEditarComponent,
    Error404Component,
    ProgressBarComponent,
    ListarTipoProductoComponent,
    AgregarEditarTipoUsuarioComponent,
    ListarTipoDocumentoComponent,
    AgregarEditarDocumentoComponent,
    RegisterComponent,
    ListarTipoServicioComponent,
    AgregarEditarTiposervicioComponent,
    ListarTipoCambioComponent,
    AgregarEditarTipoCambioComponent,
    MenuComponent,
    AgregarEditarFacturaComponent,
    ListarFacturaComponent,
    ListarAdministradorComponent,
    AgregarEditarAdministradorComponent,
    ListarMarcasComponent,
    AgregarEditarMarcasComponent,
    ListarServicioComponent,
    AgregarEditarServiciosComponent,
    ListarCargoTecnicoComponent,
    AgregarEditarCargoTecnicoComponent,
    ListaPersonaComponent,
    AgregarEditarPersonaComponent,
    ListarEquipoComponent,
    AgregarEditarEquipoComponent,
    DashboardComponent,
    LoginComponent,
    SignInComponent,
    SpinnerComponent,
    VistaUsuariComponent



  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-bottom-right',
    }), // ToastrModule added
    MatFormFieldModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule  
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    { provide: HTTP_INTERCEPTORS, useClass: AddTokenInterceptor, multi: true }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
