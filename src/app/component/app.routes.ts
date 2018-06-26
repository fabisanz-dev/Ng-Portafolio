
import { Routes, RouterModule, Router } from '@angular/router';
import { NgModule, Component } from '@angular/core';

import {
 AboutComponent,
 PortafolioComponent,
 ItemComponent,
 SearchComponent
}
from "./index.paginas";
//import { PageNotFoundComponent } from './';

const routes: Routes = [
    { path: '', component: PortafolioComponent },
    { path: 'about', component: AboutComponent },
    { path: 'item/:id', component: ItemComponent },
    { path: 'buscar/:termino', component: SearchComponent },
    { path: '**', pathMatch: 'full', redirectTo: '' },

    //{ path: 'path/:routeParam', component: MyComponent },
    //{ path: 'staticPath', component: ... },
    //{ path: '**', component: ... },
    //{ path: 'oldPath', redirectTo: '/staticPath' },
    //{ path: ..., component: ..., data: { message: 'Custom' }
    //{ path: '**', component: PageNotFoundComponent },
];

export const app_routing = RouterModule.forRoot(routes , { useHash: true });
