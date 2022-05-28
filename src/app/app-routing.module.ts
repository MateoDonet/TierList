import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { AddMediaComponent } from './add-media/add-media.component';
import { AddComponent } from './add-media/add/add.component';
import { CreateComponent } from './add-media/create/create.component';

import { AuthentificationComponent } from './authentification/authentification.component';
import { MediasComponent } from './medias/medias.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MediaResolverService } from './shared/services/resolve/media-resolver.service';
import { MediaComponent } from './medias/media/media.component';
import { UserComponent } from './user/user.component';
import { EditMediaComponent } from './medias/media/edit-media/edit-media.component';

const routes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'auth/sign-in', component: AuthentificationComponent },
  { path: 'mes-medias', component: MediasComponent },
  { path: 'media', component: AddMediaComponent,
    children: [
      { path: '', redirectTo: 'add', pathMatch: 'full' },
      { path: 'add', component: AddComponent },
      { path: 'create-and-add', component: CreateComponent }
    ]
  },
  { path: 'media/:id/:tier', component: MediaComponent,
    resolve: {
      mediaFrmRslv: MediaResolverService
    },
    children: [
      { path: 'edit', component: EditMediaComponent }
    ]
  },
  { path: 'mon-compte', component: UserComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
