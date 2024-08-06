import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { SellerService } from '../services/seller.service';

@Component({
  selector: 'app-seller-home',
  standalone: true,
  imports: [],
  templateUrl: './seller-home.component.html',
  styleUrl: './seller-home.component.css'
})
export class SellerHomeComponent {

  constructor(private sellServ : SellerService){}

  logOut(){
    this.sellServ.logout()
  }

}
