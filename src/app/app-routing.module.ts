import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { ListComponent } from './component/leave/list/list.component';
import { AuthGuardService } from './services/auth.service';

const routes: Routes = [
  {
    path: "login",
    loadChildren: () =>
      import("./modules/login.module").then((m) => m.loginModule),
  },
  {
    path: '',
    component: DashboardComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: "leavelist",
    component: ListComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: "applyleave",
    loadChildren: () =>
      import("./modules/request.module").then((m) => m.RequestModule),
    canActivate: [AuthGuardService]
  },
  { path: "**", redirectTo: "" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
