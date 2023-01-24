import { Usuario, UsuarioService } from './usuario.service';
import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController, ToastController } from '@ionic/angular';
import { ModalusuarioPage } from './modalusuario/modalusuario.page';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.page.html',
  styleUrls: ['./usuario.page.scss'],
})
export class UsuarioPage implements OnInit {

  usuarios: Usuario[];
  titulo = 'Usuario';

  constructor(
    private service: UsuarioService,
    private modalCtrl: ModalController,
    private toastCtrl: ToastController,
    private alertcontroller: AlertController) { }

  ngOnInit() {
    this.carga();
  }

  async remover(id: any){
    //this.abrirAlert("Exclusão", "Excluir Ususario", "Confirma a exclusão do registro?")
    //this.service.delete(id).subscribe(() => {
    //   this.carga();
    //   this.mensagem("Usuario Excluido.")
    //})
    const alert = await this.alertcontroller.create({
      cssClass: 'my-custon-class',
      header: 'Exclusão',
      subHeader: '',
      message: 'Confirma exclusão do usuario?',
      buttons: [{
        text: "Confirmar",
        handler: (blash) => {
          this.service.delete(id).subscribe(() => {
          this.carga();
          this.mensagem("Usuario Excluido.")
          })
        }
      } , {
        text: "Cancelar",
        role: 'cancel',
        cssClass: 'secondary',
        handler: (blah) => {
          this.carga();
          this.mensagem("Exclusão cancelada.")
        }
      }]
    });
    await alert.present();
  }

  carga(){
    this.service.getAll().subscribe(response => {
      this.usuarios = response;
    })
  }

  novoCliente(){
    this.modalCtrl.create({
      component: ModalusuarioPage
    }).then(modal => {
      modal.present();
      return modal.onDidDismiss();
  }).then(({data}) => {
    this.carga();
    this.mensagem("Usuario Cadastrado com sucesso!")
  })
  }

  atualizar(usuario: Usuario){
    this.modalCtrl.create({
      component: ModalusuarioPage,
      componentProps: {usuario}
    }).then(modal => {
      modal.present();
      return modal.onDidDismiss();
  }).then(({data}) => {
    this.carga();
    this.mensagem("O usuario foi atualizado")
  })
  }

  mensagem(texto: string){
    this.toastCtrl.create({
      message: texto,
      duration: 2000
    }).then(toast => {
      toast.present();
    })
  }

}
