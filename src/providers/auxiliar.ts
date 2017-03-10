import { Injectable } from '@angular/core';
import {AlertController } from 'ionic-angular';
import 'rxjs/add/operator/map';

@Injectable()
export class Auxiliar {

  constructor(public alertCtrl: AlertController ) {
    console.log('Hello Auxiliar Provider');
  }
  alert(title,text){
  	return this.alertCtrl.create({
	      title: title,
	      subTitle: text,
	      buttons: ['OK']
	    });
  }

}
