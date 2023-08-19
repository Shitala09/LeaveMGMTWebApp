import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ILeaveRequest } from "src/app/models/ILeaveRequest";
import { APIService } from "src/app/services/api.service";

@Component({
    selector: "app-request",
    templateUrl: "./request.component.html"
})
export class RequestComponent implements OnInit {
    leaveRequestForm: FormGroup;
    isloading:boolean=false;
    constructor(public fb: FormBuilder, public apiSrv: APIService,public router:Router) {
        this.leaveRequestForm = this.fb.group({
            startDate: ['', Validators.required],
            endDate: ['', Validators.required],
            reason: ['', Validators.required]
        });
    }
    ngOnInit(): void {
    }

    submitForm() {
        this.isloading=true;
        if (this.leaveRequestForm.valid) {
            var user = JSON.parse(localStorage.getItem("user") || '{}')

            let saveRequest: ILeaveRequest = {
                EmployeeId: user.userId,
                EmployeeName: user.userName,
                StartDate: this.leaveRequestForm.get("startDate")?.value,
                EndDate: this.leaveRequestForm.get("endDate")?.value,
                Reason: this.leaveRequestForm.get("reason")?.value
            }
            const formData = this.leaveRequestForm.value;
            this.apiSrv.SaveLeave(saveRequest).subscribe(data => {
                if (data.code == 1) {
                   this.isloading=false;
                   this.router.navigate(['/']);
                }
            }, (error) => {
                console.error("error in Save Leave");
            },
                () => {
                    this.isloading = false;
                }

            )
        }
    }
}