import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  isSedePage: boolean;

  constructor(
    private router: Router,
    private navCtrl: NavController
  ) {
    this.isSedePage = this.router.url == "/sedes"
  }

  ngOnInit() {

  }
  goToBack() {
    this.router.navigate(["sedes"]);
  }
}
