import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
    selector: "app-header",
    templateUrl: "./header.component.html"
  })
  export class HeaderComponent implements OnInit {
    constructor(public fb: FormBuilder) {
    }
    ngOnInit(): void {
    }

  }