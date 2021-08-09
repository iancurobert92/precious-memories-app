import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CoreModule } from "@core/core.module";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { SharedModule } from "@shared/shared.module";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./components";
import { AuthLayoutComponent } from "./components/auth-layout/auth-layout.component";
import { MainLayoutComponent } from "./components/main-layout/main-layout.component";

@NgModule({
  declarations: [AppComponent, AuthLayoutComponent, MainLayoutComponent],
  imports: [BrowserModule, AppRoutingModule, CoreModule, SharedModule, NgbModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
