import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ServicePageComponent } from './service-page/service-page.component';

export const routes: Routes = [
    {path:'', component: LandingPageComponent},
    {path:'about', component: AboutPageComponent},
    {path:'service', component: ServicePageComponent},
    { path: '', redirectTo: '/', pathMatch: 'full' }
];
