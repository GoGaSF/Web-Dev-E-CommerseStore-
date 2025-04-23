import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { MenComponent } from './pages/men/men.component';
import { WomenComponent } from './pages/women/women.component';
import { MenAccessoriesComponent } from './pages/men-accessories/men-accessories.component';
import { MenShoesComponent } from './pages/men-shoes/men-shoes.component';
import { MenClothComponent } from './pages/men-cloth/men-cloth.component';
import { WomenAccessoriesComponent } from './pages/women-accessories/women-accessories.component';
import { WomenShoesComponent } from './pages/women-shoes/women-shoes.component';
import { WomenClothComponent } from './pages/women-cloth/women-cloth.component';



export const routes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'men', component: MenComponent },
    {path: 'men/accessories', component: MenAccessoriesComponent},
    {path: 'men/shoes', component: MenShoesComponent},
    {path: 'men/cloth', component: MenClothComponent},
    { path: 'women', component: WomenComponent },
    {path: 'women/accessories', component: WomenAccessoriesComponent},
    {path: 'women/shoes', component: WomenShoesComponent},
    {path: 'women/cloth', component: WomenClothComponent},
    { path: '**', redirectTo: '' },
];
