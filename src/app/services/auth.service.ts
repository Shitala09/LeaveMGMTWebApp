import { Injectable, OnDestroy } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from "@angular/router";
import { BehaviorSubject } from "rxjs";
import { Observable } from "rxjs/internal/Observable";
import { map, take, takeUntil } from "rxjs/operators";
import { ILogin } from "src/app/models/Ilogin";
import { LoginService } from "./login.service";

@Injectable({
  providedIn: "root",
})
export class AuthGuardService implements CanActivate, OnDestroy {
  unsubscribe$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(private loginService: LoginService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.loginService.loggedInUserObservable.pipe(
      take(1),
      map((loggedInUserObservable: ILogin) => {
        if (localStorage.getItem("user") === null) {
          this.router.navigate(["/login"]);
          return false;
        }
        return true;
      })
    );
  }

  ngOnDestroy() {
    this.unsubscribe$.next(false);
    this.unsubscribe$.complete();
  }
}
