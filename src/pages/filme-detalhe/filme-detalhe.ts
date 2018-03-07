import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MoovieProvider } from '../../providers/moovie/moovie';

/**
 * Generated class for the FilmeDetalhePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-filme-detalhe',
  templateUrl: 'filme-detalhe.html',
})
export class FilmeDetalhePage {


  public idFilme:any;
  public filme;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private movieProvider: MoovieProvider
  
  ) {
    let id = navParams.get('id');
    this.idFilme = id;
    console.log(id);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FilmeDetalhePage');
    this.movieProvider.getMovieDetals(this.idFilme).subscribe(
      data=>{
        let objRetorno = (data as any)._body;
        this.filme = JSON.parse(objRetorno);
        console.log("----------------------------------");
        console.log(this.filme);
        console.log("----------------------------------");
      },error=>{
        console.log(error);
      }
    )

  }



}
