import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Componentes

//Componentes TipoEquipo
import { ListarComponent } from './componentes/listar/listarTipoEquipo/listar.component';

import { VistasComponent } from './vistas/producto/vistas.component';

//Componentes TipoUsuario


import { Error404Component } from './componentes/error404/error404.component';
import { ListarTipoProductoComponent } from './componentes/listar/listarTipoUsuario/listar-tipo-producto.component';
import { AgregarEditarTipoUsuarioComponent } from './componentes/agregar-editar/agregar-editar-tipo-usuario/agregar-editar-tipo-usuario.component';
import { AgregarEditarComponent } from './componentes/agregar-editar/agregar-editar-TipoEquipo/agregar-editar.component';





import { AgregarEditarDocumentoComponent } from './componentes/agregar-editar/agregar-editar-documento/agregar-editar-documento.component';
import { RegisterComponent } from './componentes/register/register.component';
import { ListarTipoDocumentoComponent } from './componentes/listar/listar-tipo-documento/listar-tipo-documento.component';
import { ListarTipoServicioComponent } from './componentes/listar/listarTipoServicio/listar-tipo-servicio.component';
import { AgregarEditarTiposervicioComponent } from './componentes/agregar-editar/agregar-editar-tiposervicio/agregar-editar-tiposervicio.component';
import { ListarTipoCambioComponent } from './componentes/listar/ListarTipocambio/listar-tipo-cambio.component';
import { AgregarEditarTipoCambioComponent } from './componentes/agregar-editar/agregar-editar-tipo-cambio/agregar-editar-tipo-cambio.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { ListarFacturaComponent } from './componentes/listar/listar-factura/listar-factura.component';
import { AgregarEditarFacturaComponent } from './componentes/agregar-editar/agregar-editar-factura/agregar-editar-factura.component';
import { ListarAdministradorComponent } from './componentes/listar/listar-administrador/listar-administrador.component';
import { AgregarEditarAdministradorComponent } from './componentes/agregar-editar/agregar-editar-administrador/agregar-editar-administrador.component';
import { ListarMarcasComponent } from './componentes/listar/listar-marcas/listar-marcas.component';
import { AgregarEditarMarcasComponent } from './componentes/agregar-editar/agregar-editar-marcas/agregar-editar-marcas.component';
import { ListarServicioComponent } from './componentes/listar/listar-servicio/listar-servicio.component';
import{AgregarEditarServiciosComponent} from './componentes/agregar-editar/agregar-editar-servicio/agregar-editar-servicio.component'
import { ListarCargoTecnicoComponent } from './componentes/listar/listar-cargo-tecnico/listar-cargo-tecnico.component';
import { AgregarEditarCargoTecnicoComponent } from './componentes/agregar-editar/agregar-editar-cargo-tecnico/agregar-editar-cargo-tecnico.component';
import { AgregarEditarPersonaComponent } from './componentes/agregar-editar/agregar-editar-persona/agregar-editar-persona.component';
import { ListaPersonaComponent } from './componentes/listar/lista-persona/lista-persona.component';
import { ListarEquipoComponent } from './componentes/listar/listar-equipo/listar-equipo.component';
import { AgregarEditarEquipoComponent } from './componentes/agregar-editar/agregar-editar-equipo/agregar-editar-equipo.component';
import { LoginComponent } from './componentes/login/login.component';
import { SignInComponent } from './componentes/sign-in/sign-in.component';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { AuthGuard } from './utils/auth.guard';
import { VistaUsuariComponent } from './componentes/vista-usuari/vista-usuari.component';

const routes: Routes = [ 

  //Ruta Raiz
  { path:'', component: VistasComponent},

  //Rutas TipoEquipo
  { path:'TipoEquipo', component: ListarComponent},
  {path:'AgregarTipoEquipo', component: AgregarEditarComponent},
  {path:'editarTipoEquipo/:id',component:AgregarEditarComponent},

    // Rutas Cargo tecnico
    { path:'CargoTecnico', component: ListarCargoTecnicoComponent },
    { path:'CargoTecnicoEditar/:id', component: AgregarEditarCargoTecnicoComponent },
    { path:'CargoTecnicoAgregar', component: AgregarEditarCargoTecnicoComponent },
  
  // rutas marcas
  { path: 'Marcas', component: ListarMarcasComponent },
  { path: 'AgregarMarcas', component: AgregarEditarMarcasComponent },
  { path: 'MarcasEditar/:id', component: AgregarEditarMarcasComponent },

    // rutas Servicio
    { path: 'Servicio', component: ListarServicioComponent },
    { path: 'AgregarServicio', component: AgregarEditarServiciosComponent },
    { path: 'ServicioEditar/:id', component: AgregarEditarServiciosComponent },
  

//Rutas TipoUuario

{ path:'Usuario', component: ListarTipoProductoComponent},
{path:'AgregarTipoUsuairo', component: AgregarEditarTipoUsuarioComponent},
{path:'editarTipoUsuairo/:id',component:AgregarEditarTipoUsuarioComponent},

//Rutas Documento
{ path:'Documento', component: ListarTipoDocumentoComponent},
{path:'AgregarTipoDocumento', component: AgregarEditarDocumentoComponent},
{path:'EditarTipoDocumento/:id',component:AgregarEditarDocumentoComponent},


//Rutas Persona
{ path:'Persona', component: ListaPersonaComponent},
{path:'AgregarPersona', component: AgregarEditarPersonaComponent},
{path:'EditarPersona/:id',component:AgregarEditarPersonaComponent},


//Rutas TipoServicio
{ path:'Tiposervio', component: ListarTipoServicioComponent},
{path:'AgregarTipoServicio', component: AgregarEditarTiposervicioComponent},
{path:'EditarTiposervicio/:id',component:AgregarEditarTiposervicioComponent},
//ruta register

{ path:'register', component: RegisterComponent},
//TipoCambio
{ path:'TipoCambio', component: ListarTipoCambioComponent},
{ path:'AgregarTipoCambio', component: AgregarEditarTipoCambioComponent},
{ path:'EditarTipoCambio/:id', component: AgregarEditarTipoCambioComponent},
//menu
{ path:'menu', component: MenuComponent},
//Rutas Factura
{ path:'Factura', component: ListarFacturaComponent},
{path:'AgregarFactura', component: AgregarEditarFacturaComponent},
{path:'EditarFactura/:id',component:AgregarEditarFacturaComponent},
//Administrador
{ path:'Admisnitrador', component: ListarAdministradorComponent},
{ path:'AgregarAdmisnitrador', component: AgregarEditarAdministradorComponent},
{ path:'Admisnitrador/:id', component: AgregarEditarAdministradorComponent},
//equipo
{ path:'equipo', component: ListarEquipoComponent},
{ path:'AgregarEquipo', component: AgregarEditarEquipoComponent},
{ path:'editarEquipo/:id', component: AgregarEditarEquipoComponent},
{ path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signIn', component: SignInComponent },

  { path: 'vistausuario', component: VistaUsuariComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  
  { path: '**', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
