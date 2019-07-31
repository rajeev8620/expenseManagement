import { Component, OnInit } from '@angular/core';


export const ROUTES= [];

@Component({
    selector: 'app-sidebar',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    username:any;
    public menuItems: any[];
    ngOnInit() {
        
        this.username=localStorage.getItem('userName');
    }

  logoutUser(){
    if (localStorage.length > 0) {
        localStorage.clear();      
      }          
      localStorage.removeItem('userName');
  }
}
