import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Album } from '@media/models';
import { Observable } from 'rxjs';
import { PhotosFacade } from './photos-facade.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss'],
})
export class PhotosComponent implements OnInit {
  public $data!: Observable<Album>;

  constructor(private facade: PhotosFacade, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.$data = this.facade.getAlbum(params.albumId);
    });
  }

  onAddPhotosBtnClicked(): void {
    console.log('onAddPhotosBtnClicked');
  }
}
