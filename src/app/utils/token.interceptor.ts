import { Injectable } from "@angular/core";
import { catchError, map, retry } from "rxjs/operators";
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse,
  HttpResponse,
  HttpHeaders,
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";

import { Router } from "@angular/router";
import { TokenService } from "../services/token.service";
import { NotificationService } from "./notifications.service";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private router: Router,private tokenSrv:TokenService,private notifySrv:NotificationService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let headersConfig = new HttpHeaders();
    const authToken = this.tokenSrv.getToken();
    if (authToken) {
        headersConfig = headersConfig.append('Authorization', authToken);
    }
    const _req = req.clone({ headers: headersConfig });
    return next.handle(_req).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          // console.log('event--->>>', event);
          if(event.body.StatusCode==401){
            this.notifySrv.notificationsnackbar("Authentication Token Expired. Please login again")
            this.tokenSrv.removeToken();
            this.router.navigate(["/login"]);
          }
        }
        return event;
      }),
      catchError((error: HttpErrorResponse) => {
        let errorMessage = "";
        if (error.error instanceof ErrorEvent) {
          // client-side error
          errorMessage = `Error: ${error.error.message}`;
        } else {
          // server-side error
          errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        if(error.status==0){
          this.notifySrv.notificationsnackbar("Could not reach to service. Kindly try later !!")
        } else {
          this.notifySrv.notificationsnackbar(error.message)
        }
        if (error.status == 401) {
          // window.location.reload();
          this.notifySrv.notificationsnackbar("Authentication Token Expired. Please login again")
          this.tokenSrv.removeToken();
          this.router.navigate(["/login"]);
        } if (error.status == 400) {
          // window.location.reload();
          this.notifySrv.notificationsnackbar(error.error.title)
        }
        return throwError(errorMessage);
      })
      )


  

  }
}
