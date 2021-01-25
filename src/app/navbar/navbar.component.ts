import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  authStatus: boolean = false;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.authStatus = JSON.parse(<string>localStorage.getItem("isAuth"));
  }
  onLogout() {
    this.authStatus = false;
    localStorage.clear();
    this.router.navigate(['/restaurants']);
  }

}
