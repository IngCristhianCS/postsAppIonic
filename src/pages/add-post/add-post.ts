import { Component } from '@angular/core';
import { NavController, NavParams,} from 'ionic-angular';
import {Validators, FormBuilder, FormGroup,FormControl } from '@angular/forms';
import { DataPosts } from '../../providers/data-posts';
import { Auxiliar } from '../../providers/auxiliar';

@Component({
  selector: 'page-add-post',
  templateUrl: 'add-post.html',
  providers: [DataPosts,Auxiliar],
})
export class AddPostPage {
	private formPost : FormGroup;
	title:  FormControl;
	body: FormControl;
	public post={}
  	constructor(private formBuilder: FormBuilder,public dataPosts:DataPosts,public navCtrl: NavController, public navParams: NavParams,public aux: Auxiliar) {
  		this.title = new FormControl('', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(25)]));
  		this.body = new FormControl('', Validators.required);
  		console.log(this.title);
  		this.formPost = this.formBuilder.group({
	      title: this.title,
	      body: this.body,
	    });
  	}

  	add(){
  		this.dataPosts.addPost(this.post).subscribe(
			data=>{
				this.post = data.json();
				this.aux.alert('','Registro Correcto!!').present();
				this.navCtrl.popToRoot();
			},err => this.aux.alert('error',err).present(),() => console.log(this.post)
		);
  		console.log(this.post);
  	}
}
