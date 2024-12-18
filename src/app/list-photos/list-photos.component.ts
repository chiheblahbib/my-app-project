import { Component } from '@angular/core';
import { Photo } from 'src/app/models/Photo';


@Component({
  selector: 'app-list-photos',
  templateUrl: './list-photos.component.html',
  styleUrls: ['./list-photos.component.css']
})
export class ListPhotosComponent {

  ngOnInit(): void {
    const albumId = this.route.snapshot.params['id'];
    this.http.get<Photo[]>(`http://localhost:3000/photos?idAlbum=${albumId}`).subscribe(data => {
      this.photos  = data;
    });
  }
  
}
