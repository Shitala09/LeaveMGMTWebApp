import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "../component/login/login.component";
import { MaterialModule } from "./material.module";
import { LoginService } from "../services/login.service";

const routes: Routes = [
  {
    path: "",
    component: LoginComponent,
  },
];

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers:[LoginService]
})
export class loginModule {}
