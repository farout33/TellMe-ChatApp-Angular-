import { Component, OnInit } from '@angular/core';
import { timeout } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  mostrarChat = false;
  usuarioLogeado : any;
  nuevoMensaje: string = ""; 
  mensajes: any = [
    {
      emisor: "s2MmBwad4FZhZDePBreIUqVUPhg1",
      texto: ""
    },
    {
      emisor: "Ob3EznDvAmRCK6mSDvy5R5i3RSf1",
      texto: ""
    },
  ];
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.getUserLogged().subscribe(usuario => {
      this.usuarioLogeado=usuario;
    });
  }

  enviarMensaje(){
    if(this.nuevoMensaje == "") return;

    console.log(this.nuevoMensaje);
    let mensaje =  {
      emisor: this.usuarioLogeado.uid,
      texto: this.nuevoMensaje
    }
    this.mensajes.push(mensaje);

    this.nuevoMensaje = "";

    setTimeout(() => {
      this.scrollToTheLastElementByClassName();
    }, 20);

    this.scrollToTheLastElementByClassName();
  }

  scrollToTheLastElementByClassName(){
    let elements = document.getElementsByClassName('msj');
    let ultimo: any = elements[elements.length - 1];
    let toppos = ultimo.offsetTop;

    //@ts-ignore
    document.getElementById('contenedorDeMensajes')?.scrollTop = toppos;
  }
}
