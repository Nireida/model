import { NgModule }              from '@angular/core';
import { Routes, RouterModule }  from '@angular/router';


const routes: Routes = [ {path: '', loadChildren: () => import('./components/brand-book-new.module').then(m => m.BrandBookNewModule)}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
