import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import  {MatSliderModule} from "@angular/material/slider";
import { HomeComponent } from './page/home/home.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { ChateauSingleComponent } from './page/chateau-single/chateau-single.component';
import { ChateauListComponent } from './page/chateau-list/chateau-list.component';
import { ChateauNewComponent } from './page/chateau-new/chateau-new.component';
import { AddressFormComponent } from './chateau/address-form/address-form.component';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { ReactiveFormsModule } from '@angular/forms';
import { CarouselComponent } from './utility/carousel/carousel.component';
import { ImageComponent } from './utility/image/image.component';
import { UploadComponent } from './utility/upload/upload.component';
import { RatingComponent } from './utility/rating/rating.component';
import { LoginComponent } from './page/auth/login/login.component';
import { RegisterComponent } from './page/auth/register/register.component';
import { MapComponent } from './utility/map/map.component';
import { CommentaireFormComponent } from './commentaire/commentaire-form/commentaire-form.component';
import { DetailComponent } from './commentaire/commentaire-detail/detail.component';
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ChateauFormComponent } from './page/chateau-form/chateau-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ChateauSingleComponent,
    ChateauListComponent,
    ChateauNewComponent,
    AddressFormComponent,
    CarouselComponent,
    ImageComponent,
    UploadComponent,
    RatingComponent,
    LoginComponent,
    RegisterComponent,
    MapComponent,
    CommentaireFormComponent,
    DetailComponent,
    ChateauFormComponent,

  ],

  imports: [
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatSliderModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    ReactiveFormsModule,
    CarouselModule
  ],

  providers: [],

  exports: [
    HomeComponent,
    AppComponent
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
