import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';



@Component({
  selector: 'app-laminas',
  templateUrl: './laminas.page.html',
  styleUrls: ['./laminas.page.scss'],
})
export class LaminasPage implements OnInit {


  constructor(
    private router: Router,
    private navCtrl: NavController) { }
  ngOnInit() {
  }
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
