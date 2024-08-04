import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-seller-auth',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css'],  // Corrected property name
  providers: [FormBuilder]  // Only include FormBuilder here
})
export class SellerAuthComponent implements OnInit {

  constructor(public fobj: FormBuilder) { }

  SellerInfo!: FormGroup;

  ngOnInit(): void {
    this.SellerInfo = this.fobj.group({
      Name: ['', [Validators.required]],
      Password: ['', [Validators.required, Validators.minLength(5)]],
      Email: ['', [Validators.required, Validators.email]]
    });
  }

  submitData(){
      console.log(this.SellerInfo.value)
  }

}
