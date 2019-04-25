import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DonorComponent } from './donor/donor.component';

const routes: Routes = [
  {path:'', component: DonorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
