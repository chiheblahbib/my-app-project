import { Component, OnInit } from '@angular/core';
import { Album } from 'src/app/models/album';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list-albums',
  templateUrl: './list-albums.component.html',
  styleUrls: ['./list-albums.component.css']
})
export class ListAlbumsComponent implements OnInit {
  albums: Album[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<Album[]>('http://localhost:3000/albums').subscribe(data => {
      this.albums = data;
    });
  }
  deleteAlbum(id: number): void {
    this.http.delete(`http://localhost:3000/albums/${id}`).subscribe(() => {
      this.albums = this.albums.filter(album => album.id !== id);
    });
  }
  
}
