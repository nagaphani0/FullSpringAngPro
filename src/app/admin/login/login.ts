import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  standalone:true,
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  constructor(private router:Router) {
  }
loginObj:any={
  username:'',
  password:''
}

onLogin(){
  if(this.loginObj.username=="phani"&&this.loginObj.password=='123'){
  console.log(this.loginObj)
    alert('success')
    this.router.navigateByUrl('/shop')
  }
  else {
    alert('wrong cred')
  }
}
}
