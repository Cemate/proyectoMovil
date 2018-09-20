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
