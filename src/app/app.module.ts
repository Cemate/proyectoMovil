import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FooterComponent } from './pages/shared/footer/footer.component';
import { HeaderComponent } from './pages/shared/header/header.component';
import { PrincipalComponent } from './pages/principal/principal.component';
import { AppRoutingModule } from './app.routing';
import { SidebarComponent } from './pages/shared/sidebar/sidebar.component';
import { NavegacionComponent } from './pages/shared/navegacion/navegacion.component';
import { FormatoComponent } from './pages/principal/formato/formato.component';
import { BuscadorInzquierdoComponent } from './pages/shared/buscador-inzquierdo/buscador-inzquierdo.component';
import { DatosFormatoComponent } from './pages/principal/formato/datos-formato/datos-formato.component';
import { FormatosComponent } from './pages/principal/formatos/formatos.component';
import { FormatoPipe } from './pipes/formato.pipe';
import { OrigenVecindadComponent } from './pages/principal/formato/tipos/origen-vecindad/origen-vecindad.component';
import { NombramientoComponent } from './pages/principal/formato/tipos/nombramiento/nombramiento.component';
import { LiberacionServicioComponent } from './pages/principal/formato/tipos/liberacion-servicio/liberacion-servicio.component';
import { HeaderFormatosComponent } from './pages/principal/formato/tipos/header-formatos/header-formatos.component';
import { FooterFormatosComponent } from './pages/principal/formato/tipos/footer-formatos/footer-formatos.component';
import { CitatorioEscuelasComponent } from './pages/principal/formato/tipos/citatorio-escuelas/citatorio-escuelas.component';
import { HeaderSindicoComponent } from './pages/principal/formato/tipos/header-sindico/header-sindico.component';
import { ConstanciaPosesionComponent } from './pages/principal/formato/tipos/constancia-posesion/constancia-posesion.component';
import { IngresosEconomicosComponent } from './pages/principal/formato/tipos/ingresos-economicos/ingresos-economicos.component';
import { AntecedentesNoPenalesComponent } from './pages/principal/formato/tipos/antecedentes-no-penales/antecedentes-no-penales.component';
import { FooterSindicoComponent } from './pages/principal/formato/tipos/footer-sindico/footer-sindico.component';
import { DomicilioComponent } from './pages/principal/formato/tipos/domicilio/domicilio.component';
import { DefuncionComponent } from './pages/principal/formato/tipos/defuncion/defuncion.component';
import { CitatorioComponent } from './pages/principal/formato/tipos/citatorio/citatorio.component';
import { FooterAgenteAgenteSuplenteComponent } from './pages/principal/formato/tipos/footer-agente-agente-suplente/footer-agente-agente-suplente.component';
import { FooterSindicoAuxYSinuxsuplenteComponent } from './pages/principal/formato/tipos/footer-sindico-aux-ysinuxsuplente/footer-sindico-aux-ysinuxsuplente.component';
import { CitatorioLocatariosComponent } from './pages/principal/formato/tipos/citatorio-locatarios/citatorio-locatarios.component';
import { SolicitudPoliciaMunComponent } from './pages/principal/formato/tipos/solicitud-policia-mun/solicitud-policia-mun.component';
import { FooterAgenteSindicoComponent } from './pages/principal/formato/tipos/footer-agente-sindico/footer-agente-sindico.component';
import { HeaderFormatos2Component } from './pages/principal/formato/tipos/header-formatos2/header-formatos2.component';
import { ConfiguracionesFormatosComponent } from './pages/shared/configuraciones-formatos/configuraciones-formatos.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    PrincipalComponent,
    SidebarComponent,
    NavegacionComponent,
    FormatoComponent,
    BuscadorInzquierdoComponent,
    DatosFormatoComponent,
    FormatosComponent,
    FormatoPipe,
    OrigenVecindadComponent,
    NombramientoComponent,
    LiberacionServicioComponent,
    HeaderFormatosComponent,
    FooterFormatosComponent,
    CitatorioEscuelasComponent,
    HeaderSindicoComponent,
    ConstanciaPosesionComponent,
    IngresosEconomicosComponent,
    AntecedentesNoPenalesComponent,
    FooterSindicoComponent,
    DomicilioComponent,
    DefuncionComponent,
    CitatorioComponent,
    FooterAgenteAgenteSuplenteComponent,
    FooterSindicoAuxYSinuxsuplenteComponent,
    CitatorioLocatariosComponent,
    SolicitudPoliciaMunComponent,
    FooterAgenteSindicoComponent,
    HeaderFormatos2Component,
    ConfiguracionesFormatosComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
