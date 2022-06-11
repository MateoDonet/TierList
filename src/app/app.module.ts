import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { MediasComponent } from './medias/medias.component';
import { AccueilComponent } from './accueil/accueil.component';
import { MenuComponent } from './menus/menu/menu.component';
import { MenuPhoneComponent } from './menus/menu-phone/menu-phone.component';
import { AddMediaComponent } from './add-media/add-media.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AddComponent } from './add-media/add/add.component';
import { CreateComponent } from './add-media/create/create.component';
import { DetailAddMediaComponent } from './add-media/add/detail-add-media/detail-add-media.component';
import { MediaComponent } from './medias/media/media.component';
import { MediaCardComponent } from './medias/media-card/media-card.component';
import { UserComponent } from './user/user.component';
import { EditMediaComponent } from './medias/media/edit-media/edit-media.component';
import { SpinnerComponent } from './spinner/spinner.component';

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
    CreateComponent,
    DetailAddMediaComponent,
    MediaComponent,
    MediaCardComponent,
    UserComponent,
    EditMediaComponent,
    SpinnerComponent
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
