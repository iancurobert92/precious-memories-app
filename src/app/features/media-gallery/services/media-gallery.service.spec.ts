import { TestBed } from "@angular/core/testing";

import { MediaGalleryService } from "./media-gallery.service";

describe("MediaGalleryService", () => {
  let service: MediaGalleryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MediaGalleryService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
