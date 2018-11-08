import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {

  formGroup : FormGroup; // <<<-------- Adicionar

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private alertCtrl: AlertController,
    public formBuilder : FormBuilder // <<<-------- Adicionar
  ) {
    this.formGroup = this.formBuilder.group({  // <<<-------- Adicionar
      nome : ['',[Validators.required, Validators.minLength(5), Validators.maxLength(20)]],
      endereco : ['Rio de Janeiro',[Validators.required, Validators.minLength(5), Validators.maxLength(20)]],
      telefone : ['',[Validators.required, Validators.minLength(11), Validators.maxLength(11)]],
      email : ['',[Validators.required, Validators.email, Validators.minLength(5), Validators.maxLength(20)]],
    }); // <<<-------- Adicionar
  }

  // x Remover ionViewDidLoad

  cadastrar(){

    console.log(this.formGroup.value);

    let alert = this.alertCtrl.create({
      title: 'Mensagem',
      subTitle: 'Cadastrado com sucesso',
      buttons: ['OK']
    });
    alert.present();
  }

}
