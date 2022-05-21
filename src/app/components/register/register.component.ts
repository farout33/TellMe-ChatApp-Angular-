import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  usuario={
    email: '',
    password: ''
  }

  constructor(private authService:AuthService){

  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  Registrarse(){
    const {email,password} = this.usuario;
    this.authService.register(email,password).then(res => {
      console.log(res);
    })
  }


}