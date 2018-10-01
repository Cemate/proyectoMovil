import { LiberacionServicioComponent } from './pages/principal/formato/tipos/liberacion-servicio/liberacion-servicio.component';
import { OrigenVecindadComponent } from './pages/principal/formato/tipos/origen-vecindad/origen-vecindad.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrincipalComponent } from './pages/principal/principal.component';
import { FormatoComponent } from './pages/principal/formato/formato.component';
import { NombramientoComponent } from './pages/principal/formato/tipos/nombramiento/nombramiento.component';

const app_routes: Routes = [
    // { path: 'formatos', component: PrincipalComponent},
    // { path: 'about', component: AboutComponent},
    { path: 'home', children: [
        { path: '', component: PrincipalComponent},
        { path: 'formato', component: FormatoComponent, children: [
            { path: '0', component: OrigenVecindadComponent},
            { path: '1', component: NombramientoComponent},
            { path: '2', component: LiberacionServicioComponent},
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
