import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { SellerService } from '../services/seller.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-seller-auth',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,HttpClientModule],
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css'],  // Corrected property name
  providers: [FormBuilder, SellerService]  // Only include FormBuilder here
})
export class SellerAuthComponent implements OnInit {

  constructor(private fobj: FormBuilder, private signUpServ: SellerService, private router: Router) { }

  SellerInfo!: FormGroup;

  ngOnInit(): void {
    this.SellerInfo = this.fobj.group({
      Name: ['', [Validators.required]],
      Password: ['', [Validators.required, Validators.minLength(5)]],
      Email: ['', [Validators.required, Validators.email]]
    });

    this.signUpServ.reloadSeller();
  }

  submitData() {
    this.signUpServ.userSignup(this.SellerInfo.value)
  }
}

