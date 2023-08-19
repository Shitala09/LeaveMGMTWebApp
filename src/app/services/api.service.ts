import { Injectable, OnDestroy } from "@angular/core";

@Injectable({
    providedIn: "root",
  })
  export class APIService implements OnDestroy {
    ngOnDestroy(): void {
    }
  }