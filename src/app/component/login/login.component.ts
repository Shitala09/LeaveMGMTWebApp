import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
    selector: "app-login",
    templateUrl: "./login.component.html"
  })
  export class LoginComponent implements OnInit {
    loginForm: FormGroup;

    constructor(private formBuilder: FormBuilder) {
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
          });
    }
  
    ngOnInit() {
      
    }
  
    login() {
      if (this.loginForm.valid) {
        let username = this.loginForm.get('username')?.value;
        let password = this.loginForm.get('password')?.value;
        // Implement your login logic here
      }
    }

  }