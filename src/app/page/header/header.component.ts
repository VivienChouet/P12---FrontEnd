import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";
import {map, shareReplay, startWith} from "rxjs/operators";
import { AuthService } from 'src/app/services/auth/auth.service';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  submitted = false;
  logoutForm!: FormGroup;

  constructor(private breakpointObserver: BreakpointObserver, private authService : AuthService, private formBuilder : FormBuilder) {}

  ngOnInit(): void {
    console.log(localStorage.length)
    this.logoutForm = this.formBuilder.group({})
  }

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

    onSubmit(){
      this.submitted=true;
      console.log("On submit logout")
      this.authService.logout();
    }

}



