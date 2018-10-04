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
