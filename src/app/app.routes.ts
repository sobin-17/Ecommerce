import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
    {
        path:'',
        component:HomeComponent
    },
    {
        path:'categories',
        component:CategoriesComponent
    },
    {
        path:'product/:id',
        component:ProductPageComponent
    },
    {
        path:'login',
        component:LoginComponent
    }
];
