import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { CarritoComponent } from './pages/carrito/carrito.component';
import { CatItemComponent } from './pages/cat-item/cat-item.component';
import { CatalogoComponent } from './pages/catalogo/catalogo.component';
import { CategoriasComponent } from './pages/categorias/categorias.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'login', component: LoginComponent },
  {
    path: 'home', component: HomeComponent, canActivate: [AuthGuard],
    children: [
      { path: '', component: CategoriasComponent },
      { path: 'catalogo', component: CatalogoComponent },
      { path: 'carrito', component: CarritoComponent },
      { path: 'items/:id', component: CatItemComponent },
      { path: '**', pathMatch: 'full', redirectTo: 'home' },

    ],
  },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
