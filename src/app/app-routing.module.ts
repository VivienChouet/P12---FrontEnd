import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./page/home/home.component";
import {LoginComponent} from "./page/auth/login/login.component";
import {RegisterComponent} from "./page/auth/register/register.component";
import {ChateauListComponent} from "./page/chateau-list/chateau-list.component";
import {ChateauSingleComponent} from "./page/chateau-single/chateau-single.component";
import {ChateauNewComponent} from "./page/chateau-new/chateau-new.component";


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'auth/login', component: LoginComponent },
  { path: 'auth/register', component: RegisterComponent },
  { path: 'chateaux', component: ChateauListComponent },
  { path: 'chateaux/detail/:id', component: ChateauSingleComponent },
  //{ path: 'chateaux/update/:id', component: ChateauUpdateComponent},
  { path : 'chateaux/create',component: ChateauNewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
