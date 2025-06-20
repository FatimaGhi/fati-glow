import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CatlogComponent } from './catlog/catlog.component';
import { CartComponent } from './cart/cart.component';
import { RegisterComponent } from './register/register.component';
import { DashboardSComponent } from './dashboard-s/dashboard-s.component';
import { CommandComponent } from './command/command.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { AddProductComponent } from './add-product/add-product.component';

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
    {path: 'checkout', component: CheckoutComponent},
    {path: 'myOrders', component: MyOrdersComponent},
    {path: 'orderDetails/:id', component: OrderDetailsComponent},
    {path: 'addProduct', component: AddProductComponent}
];
