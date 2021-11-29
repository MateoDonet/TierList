import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { MediasComponent } from './medias/medias.component';
import { AccueilComponent } from './accueil/accueil.component';
import { MenuComponent } from './menu/menu.component';
import { MenuPhoneComponent } from './menu-phone/menu-phone.component';
import { AddMediaComponent } from './add-media/add-media.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AddComponent } from './add-media/add/add.component';
import { CreateComponent } from './add-media/create/create.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthentificationComponent,
    MediasComponent,
    AccueilComponent,
    MenuComponent,
    MenuPhoneComponent,
    AddMediaComponent,
    PageNotFoundComponent,
    AddComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
