import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MoovieProvider } from '../../providers/moovie/moovie';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers: [
    MoovieProvider
  ]
})
export class FeedPage {

  public listaFilme = new Array();

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private movieProvider: MoovieProvider
  ) {
  }


  ionViewDidLoad() {
    console.log('entrou no controler');
    this.movieProvider.getLastMovies().subscribe(
      data=>{
        let objRetorno = JSON.parse((data as any)._body);
        console.log(objRetorno.results);
        this.listaFilme = objRetorno.results;
      },error=>{
        console.log(error);
      }
    )
  }

}
