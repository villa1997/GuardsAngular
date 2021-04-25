import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ValidateTokenService } from '../services/validate-token.service';

@Injectable({
  providedIn: 'root'
})
export class VigilanteGuard implements CanActivate {
  constructor(private router: Router, private validateToken: ValidateTokenService){

  }  

  // Prueba de commit 
  Redirect(flag:boolean):any{
    if(!flag){
        this.router.navigate(['/', 'notFound']);
    }
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const exists =  this.validateToken.GetToken()
    this.Redirect(exists); 
    return exists;
  }
  
}
