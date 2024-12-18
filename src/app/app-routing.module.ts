import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ListAlbumsComponent } from './components/list-albums/list-albums.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'albums', component: ListAlbumsComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]c
})
export class AppRoutingModule {}
import { ListAlbumsComponent } from './components/list-albums/list-albums.component';

const routes: Routes = [
  { path: 'albums', component: ListAlbumsComponent }
];
