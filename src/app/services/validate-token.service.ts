import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidateTokenService {

  constructor() { }

  GetToken():boolean{
    return localStorage.getItem('token') ? true : false;
  }

  SetToken(){
    localStorage.setItem('token', 'id=1025414')
  }
}
