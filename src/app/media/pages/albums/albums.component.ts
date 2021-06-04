import { Component, OnInit } from '@angular/core';
import { Album } from '@media/models/album';
import { Observable } from 'rxjs';
import { AlbumsFacade } from './albums-facade.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss'],
})
export class AlbumsComponent implements OnInit {
  public $data!: Observable<Album[]>;
  constructor(private facade: AlbumsFacade) {}

  ngOnInit(): void {
    this.$data = this.facade.getAlbums();
  }

  onCreateAlbumBtnClicked(): void {
    this.facade.createAlbum();
  }

  onDeleteAlbumClicked(id: string): void {
    this.facade.deleteAbum(id);
  }

  onEditAlbumClicked(id: string): void {
    this.facade.editAlbum(id);
  }
}
