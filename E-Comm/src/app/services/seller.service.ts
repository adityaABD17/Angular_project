import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Signup, SignupResponse } from '../data/dataType';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class SellerService {

  isSellerLoggedIn = new BehaviorSubject<boolean>(false);

  constructor(
    private http: HttpClient,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.initializeSellerStatus();
  }

  private initializeSellerStatus() {
    if (isPlatformBrowser(this.platformId)) {
      const storedSeller = localStorage.getItem('seller');
      if (storedSeller) {
        this.isSellerLoggedIn.next(true);
      }
    }
  }

  userSignup(data: Signup){
    this.http.post<SignupResponse>(`http://localhost:3000/seller`, data, { observe: 'response' })
    .subscribe((result)=>{
      this.isSellerLoggedIn.next(true);
      localStorage.setItem('seller',JSON.stringify(result.body))
      this.router.navigate(['seller-home'])
      console.warn(result)
    });
    
  }

  reloadSeller() {
    if (isPlatformBrowser(this.platformId)) {
      if (localStorage.getItem('seller')) {
        this.isSellerLoggedIn.next(true);
        this.router.navigate(['seller-home']);
      }
    }
  }

  logout() {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem('seller');
      this.isSellerLoggedIn.next(false);
      this.router.navigate(['seller-auth']);
    }
  }
}
