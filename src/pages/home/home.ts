import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DataPosts } from '../../providers/data-posts';
import { DetallesPage } from '../detalles/detalles';
import { AddPostPage } from '../add-post/add-post';
import { Auxiliar } from '../../providers/auxiliar';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers:[DataPosts,Auxiliar]
})
export class HomePage {
	public posts;
	constructor(public auxiliar: Auxiliar, public navCtrl: NavController,public dataPosts:DataPosts) {
		this.initializeApp();		
	}
	initializeApp(){
		this.dataPosts.getPosts().subscribe(
			data=>{
				this.posts = data.json();
			},err => this.auxiliar.alert('',err),() => console.log()
		);
	}
	abrirDetalles(id){
		this.navCtrl.push(DetallesPage,{id:id});
	}
	add(){
		this.navCtrl.push(AddPostPage);
	}

}
