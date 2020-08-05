import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppIndexComponent } from './app-index/app-index.component';

const routes: Routes = [
  {
    path: '',
    component: AppIndexComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
