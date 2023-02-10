import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerSupportComponent } from './customer-support/customer-support.component';
import { HomeComponent } from './home/home.component';
import { ImageGeneratorComponent } from './image-generator/image-generator.component';


const routes: Routes = [ 
  { path: '', component:HomeComponent},
{ path: 'chat', component: CustomerSupportComponent  },
{ path: 'image', component: ImageGeneratorComponent  }]
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

