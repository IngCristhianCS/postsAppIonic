import { Injectable } from '@angular/core';
import { Http ,Headers} from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class DataPosts {
	public url_root;
	private headersjson = new Headers({'Content-Type': 'application/json','Access-Control-Allow-Origin': '*'});
	private headersform= new Headers({'Content-Type': 'application/x-www-form-urlencoded','Access-Control-Allow-Origin': '*','Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE'});
	constructor(public http: Http) {
		this.url_root='http://192.168.1.72/post';
	}
  	getPosts(){
		return this.http.get(this.url_root, {headers: this.headersjson});
	}
	getPost(id){
		return this.http.get(`${this.url_root}/${id}`, {headers: this.headersjson});
	}
	deletePost(id){
		return this.http.delete(`${this.url_root}/${id}`, {headers: this.headersform});
		//return this.http.get(`${this.url_root}/delete/${id}`, {headers: this.headersjson});
	}
	addPost(parametros){
		return this.http.post(this.url_root, parametros, {headers: this.headersform});
	}
}
