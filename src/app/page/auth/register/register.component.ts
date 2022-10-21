import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  constructor(
    private formBuilder: UntypedFormBuilder,
    private authservice: AuthService
  ) {}

  registerForm!: UntypedFormGroup;
  hide = true;

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstName: [null],
      lastName: [null],
      email: [null],
      password: [null],
    });
  }

  submitted = false;

  onSubmit() {
    this.submitted = true;
    const { firstName, lastName, email, password } = this.registerForm.value;
    this.authservice
      .addUser(firstName, lastName, email, password)
      .subscribe((s) => console.log(s));
  }

}
