import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'team-proj';
  isAuthenticated: boolean = false;
  constructor(private router: Router) {
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        if (event.url === '/home' || event.url === '/survey') {
          this.isAuthenticated = true;
        } else this.isAuthenticated = false;
      }
    });
  }
  ngOnInit() {
    this.isAuthenticated = JSON.parse(
      JSON.stringify(localStorage.getItem('isAuthenticated'))
    );
  }
}
