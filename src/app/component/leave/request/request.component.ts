import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
    selector: "app-request",
    templateUrl: "./request.component.html"
  })
  export class RequestComponent implements OnInit {
    leaveRequestForm: FormGroup;
    constructor(public fb: FormBuilder) {
        this.leaveRequestForm = this.fb.group({
            startDate: ['', Validators.required],
            endDate: ['', Validators.required],
            reason: ['', Validators.required]
          });
    }
    ngOnInit(): void {
    }

    submitForm() {
        if (this.leaveRequestForm.valid) {
          const formData = this.leaveRequestForm.value;
          // Implement logic to submit the form data to the server
        }
    }
  }