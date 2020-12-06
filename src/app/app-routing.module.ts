import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppIndexComponent } from './app-index/app-index.component';
import { PageContactoComponent } from './page-contacto/page-contacto.component';
import { PageServiceComponent } from './page-service/page-service.component';




const routes: Routes = [
  {
    path: '',
    component: AppIndexComponent,
  },
  {
    path: 'servico',
    component: PageServiceComponent
  },
  {
    path: 'contacto',
    component: PageContactoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
