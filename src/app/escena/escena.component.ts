import { Component, Input, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-escena',
  templateUrl: './escena.component.html',
  styleUrls: ['./escena.component.scss']
})
export class EscenaComponent {
  @Input() public frases = [
    { frase: "El nostre heroi estava surant l'espai sideral quan la llunyania va albirar una nau espacial.", img: "../../assets/img/1.jpg" },
    { frase: "Sentia curiositat per l'interior de la nau i es va posar a inspeccionar-la. Va arribar a una sala amb dues portes.", img: "../../assets/img/2.jpg"},
    { frase: "L'heroi va decidir travessar la porta que el portava a casa", img: "../../assets/img/3.jpg" },
    { frase: "Mentrestant, altres heroes no van tenir tanta sort en la seva elecció ...", img: "../../assets/img/4.jpg" },
  ];
background: any;

  next() {
    
    const class_frase_activa = document.getElementsByClassName("frase_activa");
    const child_frase_activa = class_frase_activa[0];
    let id_frase_activa = child_frase_activa.id;
    document.getElementById(id_frase_activa+"")!.removeAttribute("class");
    if(id_frase_activa == (""+(this.frases.length-1))){id_frase_activa = "-1";}
    const next_frase = document.getElementById(""+(parseInt(id_frase_activa)+1));
    next_frase?.setAttribute('class', 'frase_activa');

    const body = (document.getElementById("body-escena") as HTMLElement);
    body!.style.backgroundImage = "url("+this.frases[(parseInt(id_frase_activa)+1)].img+")";
    
  }

  prev() {
    const class_frase_activa = document.getElementsByClassName("frase_activa");
    const child_frase_activa = class_frase_activa[0];
    let id_frase_activa = child_frase_activa.id;
    document.getElementById(id_frase_activa+"")!.removeAttribute("class");
    if(id_frase_activa == "0"){id_frase_activa = String(this.frases.length)}
    const next_frase = document.getElementById(""+(parseInt(id_frase_activa)-1));
    next_frase?.setAttribute('class', 'frase_activa');

    const body = document.getElementById("body-escena");
    body!.style.backgroundImage = "url("+this.frases[(parseInt(id_frase_activa)+1)].img+")";
  }

}
