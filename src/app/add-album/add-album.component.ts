import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-add-album',
  templateUrl: './add-album.component.html',
  styleUrls: ['./add-album.component.css']
})

export class AddAlbumComponent {
  albumForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.albumForm = this.fb.group({
      title: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9 ]*$')]],
      coverPicture: ['', Validators.minLength(5)]
    });
  }

  addAlbum(): void {
    if (this.albumForm.valid) {
      const newAlbum = {
        ...this.albumForm.value,
        creationDate: new Date(),
        archived: 0
      };
      this.http.post('http://localhost:3000/albums', newAlbum).subscribe();
    }
  }
}
