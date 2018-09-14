import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrincipalComponent } from './pages/principal/principal.component';
import { FormatoComponent } from './pages/formato/formato.component';

const app_routes: Routes = [
    { path: 'home', component: PrincipalComponent},
    // { path: 'about', component: AboutComponent},
    { path: 'formato/:id', component: FormatoComponent},
    // { path: 'search/:termino', component: SearchComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
    imports: [
        RouterModule.forRoot( app_routes, { useHash: true})
    ],
    exports: [
        RouterModule,
    ]
})
export class AppRoutingModule {

}
