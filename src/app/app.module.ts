import { NgModule, ErrorHandler } from '@angular/core';
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
import { MatSliderModule } from "@angular/material/slider";
import { HomeComponent } from './page/home/home.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { ChateauDetailComponent } from './page/chateau-detail/chateau-detail.component';
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
import { LoginComponent } from './page/auth/login/login.component';
import { RegisterComponent } from './page/auth/register/register.component';
import { MapComponent } from './utility/map/map.component';
import { CommentaireFormComponent } from './commentaire/commentaire-form/commentaire-form.component';
import { DetailComponent } from './commentaire/commentaire-detail/detail.component';
import { CommonModule } from "@angular/common";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { CarouselModule } from 'ngx-owl-carousel-o';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';
import { HeaderComponent } from './page/header/header.component';
import { ChateauUpdateComponent } from './page/chateau-update/chateau-update.component';
import { MatSnackBarModule } from '@angular/material/snack-bar'
import { GlobalHttpErrorHandlerService } from './services/global-http-error-handler.service';
import { SingleComponent } from './chateau/single/single.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { SearchAutocompleteComponent } from './utility/search-autocomplete/search-autocomplete.component';
import { BorderCardDirective } from './directive/border-card.directive';
import { SidenavComponent } from './page/sidenav/sidenav.component';
import { SidenaveeComponent } from './sidenavee/sidenavee.component';
import { MychateauComponent } from './page/mychateau/mychateau.component';
import { StarRatingModule } from 'angular-star-rating';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ChateauDetailComponent,
    ChateauListComponent,
    ChateauNewComponent,
    AddressFormComponent,
    CarouselComponent,
    ImageComponent,
    UploadComponent,
    LoginComponent,
    RegisterComponent,
    MapComponent,
    CommentaireFormComponent,
    DetailComponent,
    HeaderComponent,
    ChateauUpdateComponent,
    SingleComponent,
    SearchAutocompleteComponent,
    BorderCardDirective,
    SidenavComponent,
    SidenaveeComponent,
    MychateauComponent,
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
    CarouselModule,
    MatSnackBarModule,
    GooglePlaceModule,
    NgbModule,
    MatAutocompleteModule,
    StarRatingModule.forRoot()
  ],

  providers: [
    {
      provide : ErrorHandler,
    },
    {
      provide : HTTP_INTERCEPTORS,
      useClass : GlobalHttpErrorHandlerService,
      multi : true
    }
  ],

  exports: [
    HomeComponent,
    AppComponent
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
