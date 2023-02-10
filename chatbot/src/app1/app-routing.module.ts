import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerSupportComponent } from './customer-support/customer-support.component';


const routes: Routes = [ { path: '', pathMatch: 'full', redirectTo: 'chat' },
{ path: 'chat', component: CustomerSupportComponent  }]
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

