import { CitatorioEscuelasComponent } from './pages/principal/formato/tipos/citatorio-escuelas/citatorio-escuelas.component';
import { LiberacionServicioComponent } from './pages/principal/formato/tipos/liberacion-servicio/liberacion-servicio.component';
import { OrigenVecindadComponent } from './pages/principal/formato/tipos/origen-vecindad/origen-vecindad.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrincipalComponent } from './pages/principal/principal.component';
import { FormatoComponent } from './pages/principal/formato/formato.component';
import { NombramientoComponent } from './pages/principal/formato/tipos/nombramiento/nombramiento.component';
import { ConstanciaPosesionComponent } from './pages/principal/formato/tipos/constancia-posesion/constancia-posesion.component';
import { IngresosEconomicosComponent } from './pages/principal/formato/tipos/ingresos-economicos/ingresos-economicos.component';

const app_routes: Routes = [
    // { path: 'formatos', component: PrincipalComponent},
    // { path: 'about', component: AboutComponent},
    { path: 'home', children: [
        { path: '', component: PrincipalComponent},
        { path: 'formato', component: FormatoComponent, children: [
            { path: '1', component: OrigenVecindadComponent},
            { path: '2', component: LiberacionServicioComponent},
            { path: '3', component: NombramientoComponent},
            { path: '4', component: CitatorioEscuelasComponent},
            { path: '5', component: ConstanciaPosesionComponent},
            { path: '6', component: IngresosEconomicosComponent},
        ] }
    ]},
    // { path: 'formato/:id', component: FormatoComponent},
    // { path: 'search/:termino', component: SearchComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
    imports: [
        RouterModule.forRoot( app_routes)
    ],
    exports: [
        RouterModule,
    ]
})
export class AppRoutingModule {

}
