import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { ShareModule } from '../share/share.module';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ShareModule
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule { }
