import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ListAlbumsComponent } from './list-albums/list-albums.component';
import { AddAlbumComponent } from './add-album/add-album.component';
import { ArchivesComponent } from './archives/archives.component';
import { ListPhotosComponent } from './list-photos/list-photos.component';
import { PhotoComponent } from './photo/photo.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ListAlbumsComponent,
    AddAlbumComponent,
    ArchivesComponent,
    ListPhotosComponent,
    PhotoComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    CardComponent,
    FromValidationComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
