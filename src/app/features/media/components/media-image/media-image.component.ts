import { Component } from '@angular/core';
import { MediaItemComponent } from '../media-item/media-item.component';

@Component({
  selector: 'app-media-image',
  templateUrl: './media-image.component.html',
  styleUrls: ['./media-image.component.scss'],
})
export class MediaImageComponent extends MediaItemComponent {}
