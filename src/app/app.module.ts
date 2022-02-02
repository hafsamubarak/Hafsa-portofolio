import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './homePage/side-bar/side-bar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RightSideComponent } from './homePage/right-side/right-side.component';
import { AboutComponent } from './about/about/about.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PortofolioComponent } from './portofolio/portofolio/portofolio.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ContactComponent } from './contact/contact/contact.component';
import { MapComponent } from './contact/map/map.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { ContactFormComponent } from './contact/contact-form/contact-form.component';
import {HttpClientModule} from '@angular/common/http';
import { NotFoundComponent } from './not-found/not-found.component';
@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    RightSideComponent,
    AboutComponent,
    PortofolioComponent,
    ContactComponent,
    MapComponent,
    ContactFormComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    GoogleMapsModule,
    HttpClientModule,
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
