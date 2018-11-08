import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Noticia } from '../../model/noticia';
import { NOTICIAS } from '../../config/api.config';

@IonicPage()
@Component({
  selector: 'page-noticias',
  templateUrl: 'noticias.html',
})
export class NoticiasPage {

  public noticias : Noticia[] = NOTICIAS;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  detalheNoticia(noticiaObj : Noticia){
    this.navCtrl.push('DetalheNoticiaPage',{'noticia' : noticiaObj});
  }

}
