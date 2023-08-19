import { Injectable, OnDestroy } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject, Observable, pipe } from "rxjs";
import { ILogin } from "src/app/models/Ilogin";
import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";
import { IResponse } from "../models/IResponse";
@Injectable({
  providedIn: "root",
})
export class LoginService implements OnDestroy {
  url: string = environment.config.url;

  private loggedIn = new BehaviorSubject<boolean>(false);
  private loggedInUserName = new BehaviorSubject<string>("");

  userErrMsg$ = new BehaviorSubject<string>("");
  loginuserSubject: BehaviorSubject<ILogin>;

  private unsubscribe$ = new BehaviorSubject<boolean>(true);

  constructor(
    private router: Router,
    private httpclient: HttpClient
  ) {
    this.loginuserSubject = new BehaviorSubject<ILogin>(
      JSON.parse(localStorage.getItem("user") || '{}')
    );
  }

  login(user: ILogin): Observable<IResponse> {
    return this.httpclient.post<IResponse>(
      `${this.url}/login`,
      user
    );
  }

  logOut() {
    console.log("logout");
    localStorage.removeItem("tpguser");
    this.loggedIn.next(false);
    this.loggedInUserName.next("");
    this.router.navigate(["/login"]);
  }

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  get getLoggedInUserName() {
    return this.loggedInUserName.asObservable();
  }

  public get loggedInUserObservable() {
    return this.loginuserSubject.asObservable();
  }
  public get loggedInUser(): ILogin {
    return this.loginuserSubject.value;
  }
  get getLoginErrorMessage() {
    return this.userErrMsg$.value;
  }
  get getLoginErrorMessageAsObservable() {
    return this.userErrMsg$.asObservable();
  }
  ngOnDestroy() {
    this.unsubscribe$.next(false);
    this.unsubscribe$.complete();
  }
}
