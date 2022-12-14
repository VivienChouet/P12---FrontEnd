import { Component, OnInit } from '@angular/core';
import {fromEvent, Observable} from "rxjs";
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";
import {debounceTime, distinctUntilChanged, map, shareReplay, startWith, tap} from "rxjs/operators";
import { Width } from 'ngx-owl-carousel-o/lib/services/carousel.service';
import { AuthService } from './services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'WebProject12';

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, private authService : AuthService) {}

  ngOnInit(): void {
    fromEvent(window, 'resize')
    .pipe(
      debounceTime(200),
      map(() => window.innerWidth),
      distinctUntilChanged(),
      startWith(window.innerWidth),
    )
    .subscribe(width => console.log(width));
    this.authService.isUserIsAlreadyLoggedIn()
  }

 }


