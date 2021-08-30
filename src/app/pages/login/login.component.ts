import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { userModel } from 'src/app/models/customer.model';
import { AuthService } from 'src/app/services/auth.service';
import  Swal  from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: userModel = new userModel();
  recordarme: boolean;
  
  constructor(private router: Router,private auth: AuthService) {
    this.recordarme = true;
  }

  ngOnInit(): void {
  }

  login(f: NgForm) {
    if (f.form.status == 'INVALID') { return; }

    Swal.fire({
      text: 'Please Wait.!',
      icon: 'info',
      allowOutsideClick: false
    });
    Swal.showLoading();
    
    this.auth.login(f.form.value).subscribe((data: any) => {
      Swal.close();
      this.router.navigateByUrl('/home');
    }, (err: any) => {
      // console.log(err);
      Swal.fire('Error al Autenticar', '', 'error');
    });
  }


}
