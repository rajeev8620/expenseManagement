import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { LoginModule } from '../login/login.module';
import { DashboardModule } from '../dashboard/dashboard.module';
import { SidebarModule } from 'src/sidebar/sidebar.module';
import { NavbarModule } from 'src/shared/navbar/navbar.module';
import { FooterModule } from 'src/shared/footer/footer.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    BrowserAnimationsModule,
    LoginModule,
    DashboardModule,
    SidebarModule,
    NavbarModule,
    FooterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
