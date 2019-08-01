
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ExpenseAnalysisComponent } from './expense-analysis/expense-analysis.component';
import { AddExpenseComponent } from './add-expense/add-expense.component';
import { AddCardComponent } from './add-card/add-card.component';
import { SettingsComponent } from './settings/settings.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { NgModule } from '@angular/core';


const  routes:  Routes   = [

{
        path:'',
        redirectTo: 'dashboard',
        pathMatch: 'full' 
    },
    {
        path: 'dashboard',
        component: DashboardComponent,
        children:[
            {
                path:'',
                redirectTo: 'expenseanalysis',
                pathMatch: 'full' 
            },
            {
                path:'expenseanalysis',
                component: ExpenseAnalysisComponent 
            },
        {
        path:  'addexpense',
        component:  AddExpenseComponent
        },
        {
        path:  'addcard',
        component:  AddCardComponent
        },
        {
        path:  'settings',
        component:  SettingsComponent
        },
        {
        path:  'userprofile',
        component:  UserProfileComponent
        }
        ]
    }
  ];

  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
    })
    export  class  DashboardRoutingModule { }
