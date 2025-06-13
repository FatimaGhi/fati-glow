import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CatlogComponent } from './catlog/catlog.component';
import { CartComponent } from './cart/cart.component';
import { RegisterComponent } from './register/register.component';
import { DashboardSComponent } from './dashboard-s/dashboard-s.component';
import { CommandComponent } from './command/command.component';

import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    {path: 'home', component: HomeComponent},
    {path: 'catalog', component: CatlogComponent},
    {path: 'cart', component:CartComponent},
    {path : 'register' ,component:RegisterComponent},
    {path: 'login', component: LoginComponent},
    {path: 'DashboardS', component: DashboardSComponent},
    {path: 'command', component: CommandComponent},



];
