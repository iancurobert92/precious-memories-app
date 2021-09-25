import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "mediaType",
})
export class MediaTypePipe implements PipeTransform {
  private imgExt: string[] = ["jpg", "gif", "png"];
  private videoExt: string[] = ["mp4", "3gp", "ogg", "mov"];

  transform(url: string, value: string): boolean {
    var regEx = /\.([0-9a-z]+)(?:[\?#]|$)/i;
    const matches = regEx.exec(url.toLocaleLowerCase());
    if (value == "image") {
      if (matches) {
        return this.imgExt.includes(matches[matches.length - 1]);
      }
    }
    if (value == "video") {
      if (matches) {
        return this.videoExt.includes(matches[matches.length - 1]);
      }
    }

    return false;
  }
}
