import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoAlbumWidgetComponent } from './photo-album-widget.component';

describe('PhotoAlbumWidgetComponent', () => {
  let component: PhotoAlbumWidgetComponent;
  let fixture: ComponentFixture<PhotoAlbumWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotoAlbumWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoAlbumWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
