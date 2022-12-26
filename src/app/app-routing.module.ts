import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule)

  },
  {
    path: 'authentication',
    loadChildren: () => import('./authentication/authentication.module').then( m => m.AuthenticationPageModule)
  },
//  {
//   path:'',
//   loadChildren: () => import('./pages/page.module').then(m=>m.PageModule)
// },
//   {
//     path: 'home',
//     loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
//   },
//   {
//     path: 'cart',
//     loadChildren: () => import('./pages/cart/cart.module').then( m => m.CartPageModule)
//   },
//   {
//     path: 'page',
//     loadChildren: () => import('./pages/page/page.module').then( m => m.PagePageModule)
//   },


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
