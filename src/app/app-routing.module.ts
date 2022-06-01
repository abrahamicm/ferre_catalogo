import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'portada',
    pathMatch: 'full'
  },


  // {
  //   path: 'category/:id_categoria/:slug_categoria/:banner_categoria',
  //   loadChildren: () => import('./pages/category/category/category.module').then(m => m.CategoryPageModule)
  // },
  {
    path: 'category',
    loadChildren: () => import('./pages/category/category/category.module').then(m => m.CategoryPageModule)
  },
  {
    path: 'sedes',
    loadChildren: () => import('./pages/sedes/sedes.module').then(m => m.SedesPageModule)
  },
  {
    path: 'portada',
    loadChildren: () => import('./pages/portada/portada.module').then(m => m.PortadaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
