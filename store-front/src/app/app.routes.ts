import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';

export const routes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: '**', redirectTo: '' },
    { path: 'home', component: HomeComponent },
    
];
