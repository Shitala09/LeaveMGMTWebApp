import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { APIService } from "src/app/services/api.service";

@Component({
    selector: "app-list",
    templateUrl: "./list.component.html"
})
export class ListComponent implements OnInit {
    displayedColumns: string[] = ['startDate', 'endDate', 'reason'];
    leaves: any[];
    isloading = false;
    constructor(public fb: FormBuilder, private apiSrv: APIService) {
    }
    ngOnInit(): void {
        var user= JSON.parse(localStorage.getItem("user") || '{}')
        this.isloading = true;
        this.apiSrv.getLeaveList(user.userId).subscribe(data => {
            this.leaves = data.result
        }, (error) => {
            console.error("error in recent leave list");
        },
            () => {
                this.isloading = false;
            }

        )
    }

}