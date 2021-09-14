import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from '@core/core.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '@shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components';
import { MainLayoutComponent } from './layouts';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
  declarations: [AppComponent, AuthLayoutComponent, MainLayoutComponent, HeaderComponent, SidebarComponent],
  imports: [BrowserModule, AppRoutingModule, CoreModule, SharedModule, NgbModule, BrowserAnimationsModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
