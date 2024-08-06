import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { SellerService } from './services/seller.service';

export const authGuard: CanActivateFn = (route, state) => {
  const sellerService = inject(SellerService);
  const router = inject(Router);

  // Check if the user is logged in
  if (sellerService.isSellerLoggedIn.value) {
    return true;
  } else {
    // Redirect to login if not authenticated
    router.navigate(['seller-auth']);
    return false;
  }
};
