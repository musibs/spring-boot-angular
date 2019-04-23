import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { CreateDonorComponent } from './create-donor/create-donor.component';
import { ViewDonorComponent } from './view-donor/view-donor.component';
import { UpdateDonorComponent } from './update-donor/update-donor.component';
import { DeleteDonorComponent } from './delete-donor/delete-donor.component';

const routes: Routes = [
  {'path': 'home', component: WelcomeComponent},
  {'path': 'create', component: CreateDonorComponent},
  {'path': 'view', component: ViewDonorComponent},
  {'path': 'update', component: UpdateDonorComponent},
  {'path': 'delete', component: DeleteDonorComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
