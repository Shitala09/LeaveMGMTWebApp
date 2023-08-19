import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "../component/login/login.component";
import { MaterialModule } from "./material.module";
import { RequestComponent } from "../component/leave/request/request.component";

const routes: Routes = [
  {
    path: "",
    component: RequestComponent,
  },
];

@NgModule({
  declarations: [RequestComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
})
export class RequestModule {}
