import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
/*
  Generated class for the MoovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MoovieProvider {
  
  private link = "https://api.themoviedb.org/3";
  private apiKey = "?api_key=1dc536ea03f9b0372d48d421e9634376";
  
  constructor(public http: Http) {
    console.log('Hello MoovieProvider Provider');
  }

  getLastMovies(){
    return this.http.get(this.link+'/movie/popular'+this.apiKey);
    //return this.http.get('https://api.themoviedb.org/3/movie/76341?api_key={api_key}');
  }

  getMovieDetals(id){
    ///movie/{movie_id}
    return this.http.get(this.link+'/movie/'+id+this.apiKey);
  }

}
