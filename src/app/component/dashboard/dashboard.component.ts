import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Chart } from "chart.js";

@Component({
    selector: "app-dash",
    templateUrl: "./dashboard.component.html"
  })
  export class DashboardComponent implements OnInit {
    availableLeavesData: number[]= [10, 20, 30];
    appliedLeaveData: number;
    pendingApprovalData: number;
    leaveBalanceData: number;
    
    constructor(public fb: FormBuilder) {
    }
    ngOnInit(): void {
    }

    getChartData(value: number): number[] {
        return [value];
    }
  }