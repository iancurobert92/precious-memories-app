import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { MediaItemComponent } from '../media-item/media-item.component';

@Component({
  selector: 'app-media-video',
  templateUrl: './media-video.component.html',
  styleUrls: ['./media-video.component.scss'],
})
export class MediaVideoComponent extends MediaItemComponent implements AfterViewInit {
  @ViewChild('videoRef') videoRef?: ElementRef<HTMLVideoElement>;

  private readonly PREVIEW_TIME_LIMIT: number = 5;

  ngAfterViewInit(): void {
    if (this.videoRef) this.videoRef.nativeElement.volume = 0;
  }

  onMouseEnter(): void {
    super.onMouseEnter();
    this.startVideo();
  }

  onMouseLeave(): void {
    super.onMouseLeave();
    this.stopVideo();
  }

  onTimeUpdate(): void {
    const currentTime = this.videoRef?.nativeElement?.currentTime || 0;
    if (currentTime >= this.PREVIEW_TIME_LIMIT) {
      this.stopVideo();
    }
  }

  private startVideo(): void {
    this.videoRef?.nativeElement.play();
  }

  private stopVideo(): void {
    if (this.videoRef) {
      this.videoRef?.nativeElement.pause();
      this.videoRef.nativeElement.currentTime = 0;
    }
  }
}
