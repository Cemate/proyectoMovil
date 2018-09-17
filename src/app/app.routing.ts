import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrincipalComponent } from './pages/principal/principal.component';
import { FormatoComponent } from './pages/formato/formato.component';

const app_routes: Routes = [
    // { path: 'formatos', component: PrincipalComponent},
    // { path: 'about', component: AboutComponent},
    { path: 'home', children: [
                { path: '', component: PrincipalComponent },
                { path: 'formato/:id', component: FormatoComponent }
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
