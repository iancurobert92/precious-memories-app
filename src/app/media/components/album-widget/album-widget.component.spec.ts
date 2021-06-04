import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumWidgetComponent } from './album-widget.component';

describe('AlbumWidgetComponent', () => {
  let component: AlbumWidgetComponent;
  let fixture: ComponentFixture<AlbumWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlbumWidgetComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
