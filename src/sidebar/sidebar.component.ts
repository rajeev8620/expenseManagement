import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


export const ROUTES= [];

@Component({
    selector: 'app-sidebar',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    username:any;
    public menuItems: any[];
constructor(
      private route: ActivatedRoute,
      private router: Router
  ) { }
    ngOnInit() {
        
        this.username=localStorage.getItem('userName');
    }

  logoutUser(){
    if (localStorage.length > 0) {
        localStorage.clear();      
      }          
      localStorage.removeItem('userName');
	this.router.navigateByUrl('/login');
  }
}
