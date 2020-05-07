import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
  status="INVALID";
  profileForm = new FormGroup({
    Type: new FormControl(''),
    id: new FormControl(''),
    name: new FormControl(''),
    det: new FormControl(''),
    quantity: new FormControl(''),
    price: new FormControl(''),


  });
  productForm = new FormGroup({
    
  });

  productType: string[] = ['CPU','RAM','HDD','Mainboard'];

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }
  
}
