import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
    selector: "app-list",
    templateUrl: "./list.component.html"
  })
  export class ListComponent implements OnInit {
    displayedColumns: string[] = ['startDate', 'endDate', 'reason'];
    leaves: any[];
    constructor(public fb: FormBuilder) {
    }
    ngOnInit(): void {
    }

  }