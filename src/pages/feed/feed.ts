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

  public nome:string = "Leonardo Ferreira de Melo";

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private movieProvider: MoovieProvider
  ) {
  }

  public soma(num1:number, num2:number):void{
    alert(num1+num2);
  }

  ionViewDidLoad() {
    console.log('entrou no controler');
    this.movieProvider.getLastMovies().subscribe(
      data=>{
        console.log(JSON.parse((data as any)._body));
      },error=>{
        console.log(error);
      }
    )
  }

}
