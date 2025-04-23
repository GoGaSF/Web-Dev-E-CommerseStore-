import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { MenComponent } from './pages/men/men.component';
import { WomenComponent } from './pages/women/women.component';
import { MenAccessoriesComponent } from './pages/men-accessories/men-accessories.component';
import { MenShoesComponent } from './pages/men-shoes/men-shoes.component';
import { MenClothComponent } from './pages/men-cloth/men-cloth.component';



export const routes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'men', component: MenComponent },
    {path: 'men/accessories', component: MenAccessoriesComponent},
    {path: 'men/shoes', component: MenShoesComponent},
    {path: 'men/cloth', component: MenClothComponent},
    { path: 'women', component: WomenComponent },
    { path: '**', redirectTo: '' },
];
