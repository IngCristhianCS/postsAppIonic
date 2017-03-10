import { Component } from '@angular/core';
import { NavController, NavParams,AlertController} from 'ionic-angular';
import { DataPosts } from '../../providers/data-posts';
import { Auxiliar } from '../../providers/auxiliar';

@Component({
  selector: 'page-detalles',
  templateUrl: 'detalles.html',
  providers: [DataPosts,Auxiliar],

})
export class DetallesPage {
	public post;
	public id;
	constructor(public navCtrl: NavController,
				public navParams: NavParams,
				public dataPosts:DataPosts,
				public aux: Auxiliar,
				public alertCtrl:AlertController) {
		this.initializeApp();
	}
  	initializeApp(){
  		this.dataPosts.getPost(this.navParams.get('id')).subscribe(
			data=>{
				this.post = data.json();
			},err => this.aux.alert('error',err).present(),() => console.log(this.post)
		);
 	}
 	delete(){
 		this.dataPosts.deletePost(this.post.id).subscribe(
 			data=>{
 				this.id = data.json();
 			},err => this.aux.alert('error',err).present(),() => console.log(this.id)
 		);
 	}
 	showConfirm() {
    let confirm = this.alertCtrl.create({
	    title: '',
	    message: '¿Realmente desea Eliminar el Post?',
	    buttons: [
	        {
	          text: 'Cancel',
	          handler: () => {
	            console.log('Disagree clicked');
	          }
	        },
	        {
	          text: 'Si',
	          handler: () => {
	            this.delete();
	            this.navCtrl.popToRoot();
	          }
	        }
	      ]
	    });
	    confirm.present();
	}
}
