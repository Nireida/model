import {NgModule}              from '@angular/core';
import {Routes, RouterModule}  from '@angular/router';
import {BrandBookNewComponent} from './brand-book-new.component';


const routes: Routes = [
  {path: '', component: BrandBookNewComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BrandBookNewRoutingModule {
}
