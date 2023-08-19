export interface IUser {
    UserId: string;
    UserFullName: string;
    Emailid: string;
    MobileNo: string;
    EmpId: string;
    Pwd: string;
    Status?: number;
    LastLoginDate?: Date;
    CreatedBy: string;
    CreatedDt?: Date;
    SecurityToken?: string | null;
}
  
  
  
  
  
  