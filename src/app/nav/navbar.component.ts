import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nav-bar',
  templateUrl: './navbar.component.html',
  styles: [`
    .nav.navbar-nav {fontsize: 15px}
    #searchForm {margin-right: 100px}
    @media (max-width: 1200px) {#searchForm {display:none}}

    `
  ]
})

export class NavBarComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}
