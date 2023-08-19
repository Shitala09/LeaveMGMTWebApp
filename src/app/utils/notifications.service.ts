import { Injectable } from '@angular/core';
import { MatSnackBar,MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(public snackbar:MatSnackBar) { }

  config:MatSnackBarConfig = {
    duration:0,
    horizontalPosition:'right',
    verticalPosition:'top', 
  }

  notconfig:MatSnackBarConfig = {
    duration:0,
    horizontalPosition:'center',
    verticalPosition:'top', 
  }

  success(msg:string){
    this.config['panelClass'] = ['success']
    this.snackbar.open(msg,'x',this.config);
  }
  error(msg:string){
    this.config['panelClass'] = ['error']
    this.snackbar.open(msg,'x',this.config);
  }
  warning(msg:string){
    this.config['panelClass'] = ['warning']
    this.snackbar.open(msg,'x',this.config);
  }
  notificationsnackbar(msg:string){
    this.config['panelClass'] = ['notification']
    this.snackbar.open(msg,'Okay',this.notconfig);
  }
}
