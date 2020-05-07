import { Component, OnInit } from '@angular/core';

interface user_profile{
  studentid: string,
  name: string,
  gender: string,
  birthyear: number,
  email: string,
  phone: string,
  img: string,
  address: string,
  age: string,
  comment: string
}

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  profile: user_profile

  constructor() { 
    this.profile = {
      studentid: 'B6008031',
      name: 'Attakorn Phopan',
      gender: 'Male',
      birthyear: 1998,
      email: 'attakorn@gmail.com',
      phone: '090-xxxxxxx',
      img: 'https://api.adorable.io/avatars/285/abott@adorable.io.png',
      age: '2020-birthyear',
      address: 'SUT 111 University Avenue, Suranaree Sub-Distric, Muang Nakhon Ratchasima Distric, Nakhon Ratchasima 30000 Thailand',
      comment: ''
     
    }
  }

  ngOnInit(): void {
   
  }
 
  onClick(){
    alert(""+ this.profile.address);
  }

}
