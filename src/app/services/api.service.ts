import { HttpClient } from "@angular/common/http";
import { Injectable, OnDestroy } from "@angular/core";
import { environment } from "src/environments/environment";
import { IResponse, ISaveRes } from "../models/IResponse";
import { Observable } from "rxjs";
import { ILeaveRequest } from "../models/ILeaveRequest";

@Injectable({
    providedIn: "root",
  })
  export class APIService implements OnDestroy {
    url: string = environment.config.url;
    ngOnDestroy(): void {
    }
  constructor(private http: HttpClient) {}

  getLeaveList(userId: number): Observable<IResponse> {
    return this.http.get<IResponse>(
      `${this.url}/GetLeaveList&userId=${userId}`
    );
  }

  SaveLeave(data:ILeaveRequest): Observable<ISaveRes> {
        return this.http.post<ISaveRes>(
          `${this.url}/InsertLeave`,
          data
        );
   }
  }