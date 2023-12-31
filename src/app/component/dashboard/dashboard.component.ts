import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Chart } from "chart.js";

@Component({
    selector: "app-dash",
    templateUrl: "./dashboard.component.html"
  })
  export class DashboardComponent implements OnInit {
    availableLeavesData: number[]= [10, 20, 30];
    appliedLeaveData:number[]= [10, 20, 30];;
    pendingApprovalData: number[]= [10, 20, 30];;
    leaveBalanceData: number[]= [10, 20, 30];;
    
    constructor(public fb: FormBuilder) {
    }
    ngOnInit(): void {
    }

    getChartData(value: number): number[] {
        return [value];
    }
  }