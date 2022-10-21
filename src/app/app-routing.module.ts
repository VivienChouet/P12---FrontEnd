import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./page/home/home.component";
import {LoginComponent} from "./page/auth/login/login.component";
import {RegisterComponent} from "./page/auth/register/register.component";
import {ChateauListComponent} from "./page/chateau-list/chateau-list.component";
import {ChateauDetailComponent} from "./page/chateau-detail/chateau-detail.component";
import {ChateauNewComponent} from "./page/chateau-new/chateau-new.component";
import { MychateauComponent } from './page/mychateau/mychateau.component';
import { ChateauUpdateComponent } from './page/chateau-update/chateau-update.component';
import { AuthGuard } from './guard/auth.guard';
import { AdminGuard } from './guard/admin.guard';


const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'auth/login', component: LoginComponent },
  { path: 'auth/register', component: RegisterComponent },
  { path: 'chateaux', component: ChateauListComponent },
  { path: 'chateaux/detail/:id', component: ChateauDetailComponent,},
  { path: 'chateaux/update/:id', component: ChateauUpdateComponent},
  { path : 'chateaux/create',component: ChateauNewComponent},
  { path : 'chateaux/mychateau', component: MychateauComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
