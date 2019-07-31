import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SidebarModule } from 'src/sidebar/sidebar.module';
import { NavbarModule } from 'src/shared/navbar/navbar.module';
import { FooterModule } from 'src/shared/footer/footer.module';
import { ExpenseAnalysisComponent } from './expense-analysis/expense-analysis.component';
import { AddExpenseComponent } from './add-expense/add-expense.component';
import { AddCardComponent } from './add-card/add-card.component';
import { SettingsComponent } from './settings/settings.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SidebarModule,
    NavbarModule,
    FooterModule
  ],
  declarations: [DashboardComponent, ExpenseAnalysisComponent, AddExpenseComponent, AddCardComponent, SettingsComponent, UserProfileComponent]
})
export class DashboardModule { }
