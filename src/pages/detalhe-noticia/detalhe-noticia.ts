import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Noticia } from '../../model/noticia';
import { NoticiaService } from '../../service/noticia.service';

@IonicPage()
@Component({
  selector: 'page-detalhe-noticia',
  templateUrl: 'detalhe-noticia.html',
})
export class DetalheNoticiaPage {

  noticia : Noticia;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, public noticiaService : NoticiaService) {
    

      this.noticiaService.getNoticia(this.navParams.get('id'))
      .subscribe(response => {
        this.noticia = response[0];
      }); 

  }


}
