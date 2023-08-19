import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ILogin } from "src/app/models/Ilogin";
import { LoginService } from "src/app/services/login.service";

@Component({
    selector: "app-login",
    templateUrl: "./login.component.html"
  })
  export class LoginComponent implements OnInit {
    loginForm: FormGroup;

    constructor(private formBuilder: FormBuilder,public apiSrv:LoginService,public router:Router) {
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
          });
    }
  
    ngOnInit() {
      
    }
  
    login() {
      if (this.loginForm.valid) {
        let data:ILogin={
            UserID:this.loginForm.get('username')?.value,
            Password:this.loginForm.get('password')?.value
        }
        this.apiSrv.login(data).subscribe(data => {
            if (data.status.code == 1) {
               localStorage.setItem("User",data.result)
               this.router.navigate(['/']);
            }
        }, (error) => {
            console.error("error in login");
        },
            () => {
                console.error("error in login");
            }

        )
      }
    }

  }