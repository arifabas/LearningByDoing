import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MandiriAddComponent } from './mandiri-add/mandiri-add.component';
import { MandiriDetailComponent } from './mandiri-detail/mandiri-detail.component';
import { MandiriEmployeeComponent } from './mandiri-employee/mandiri-employee.component';
import { MandiriLoginComponent } from './mandiri-login/mandiri-login.component';

const routes: Routes = [
  {
    path: '',
    component: MandiriLoginComponent
  },
  {
    path: 'mandiri/add',
    component: MandiriAddComponent
  },
  {
    path: 'mandiri/detail/:id',
    component: MandiriDetailComponent
  },
  {
    path: 'mandiri/employee',
    component: MandiriEmployeeComponent
  },
  {
    path: 'login',
    component: MandiriLoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
