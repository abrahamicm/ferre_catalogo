import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-header-back',
  templateUrl: './header-back.component.html',
  styleUrls: ['./header-back.component.scss'],
})
export class HeaderBackComponent implements OnInit {

  constructor(
    private router: Router,
    private navCtrl: NavController
  ) { }

  @Input() backgroundImage:string
  ngOnInit() {}

  goToBack() {
    this.navCtrl.back();
  }
  goToEdit() {
    this.router.navigate(['edit-profile']);
  }
  goToSetting() {
    this.router.navigate(['setting']);
  }

}
