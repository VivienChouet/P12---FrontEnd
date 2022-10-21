import { Component, OnInit } from '@angular/core';
import { FormControl, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/DTO/User';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: UntypedFormGroup;
  user!: User;
  token! : string;
  hide = true;

  constructor(
    private formBuilder: UntypedFormBuilder,
    private authService: AuthService,
    private router: Router) {
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  submitted = false

  onSubmit() {
    this.submitted = true;
    const { email, password } = this.loginForm.value;
    this.authService.login(email, password).subscribe(res => {
      this.token = res.token;
      this.saveToken(this.token)
      console.log("token = "  +  this.token )
    });
  }

  saveToken(token: string){
  this.authService.setSession(240 ,token)
  }

  getToken(email: string, password: string) {
  }

}
