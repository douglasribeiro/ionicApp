import { Usuario, UsuarioService } from './../usuario.service';
import { ModalController } from '@ionic/angular';
import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-modalusuario',
  templateUrl: './modalusuario.page.html',
  styleUrls: ['./modalusuario.page.scss'],
})
export class ModalusuarioPage implements OnInit {

  @Input() usuario: Usuario;
  atualizar = false;
  dados = {
    id: '',
    nome: '',
    cidade: '',
    email: '',
    passwd: ''
  }

  constructor(
    private modalCtrl: ModalController,
    private service: UsuarioService) { }

  ngOnInit() {
    if(this.usuario){
      this.atualizar = true;
      this.dados = this.usuario;
    }
  }

  fecharModal(){
    this.modalCtrl.dismiss();
  }

  enviando(form: NgForm){
    const usuario = form.value;
    if(this.atualizar){
      this.service.atualizar(this.dados.id, this.dados).subscribe(response => this.modalCtrl.dismiss(response));
    }else{
      this.service.salvar(usuario).subscribe(response => this.modalCtrl.dismiss(response));
    }

  }
}
