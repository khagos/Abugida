import { Component,ViewChild } from '@angular/core';
import {MenuController, Content} from 'ionic-angular';

/*
  Generated class for the Grade page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-grade',
  templateUrl: 'grade.html'
})

export class GradePage {
  // @ViewChild(Content) content: Content;
  constructor(public menuCtrl:MenuController) {
  }

  openMenu() {
    this.menuCtrl.open();
  }

  closeMenu() {
    this.menuCtrl.close();
  }

  toggleMenu() {


  }

}
