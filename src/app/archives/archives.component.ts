import { Component } from '@angular/core';

@Component({
  selector: 'app-archives',
  templateUrl: './archives.component.html',
  styleUrls: ['./archives.component.css']
})
export class ArchivesComponent {

  ngOnInit(): void {
    this.http.get<Album[]>('http://localhost:3000/albums?archived=1').subscribe(data => {
      this.albums = data;
    });
  }
  
}
