import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SecMainService } from 'src/app/main/secondary/sec-main.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router, public secservice: SecMainService) { }

  ngOnInit(): void {
  }

  get isNavDisplayed(): boolean {
    return this.secservice.isDisplayed;
  }

  displayNav() {
    this.router.navigate([{outlets: {sidenav: ['panel']}}]);
    this.secservice.isDisplayed = true;
  }

  hideNav() {
    this.secservice.isDisplayed = false;
  }

}
