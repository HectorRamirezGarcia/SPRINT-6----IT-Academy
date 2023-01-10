import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-escena',
  templateUrl: './escena.component.html',
  styleUrls: ['./escena.component.scss']
})
export class EscenaComponent {
  @Input() public frases = [
    " El nostre heroi estava surant l'espai sideral quan la llunyania va albirar una nau espacial", 
    "Sentia curiositat per l'interior de la nau i es va posar a inspeccionar-la. Va arribar a una sala amb dues portes.", 
    "L'heroi va decidir travessar la porta que el portava a casa", 
    "Mentrestant, altres heroes no van tenir tanta sort en la seva elecció ..."
  ];

  next() {
    const class_frase_activa = document.getElementsByClassName("frase_activa");
    const child_frase_activa = class_frase_activa[0];
    let id_frase_activa = child_frase_activa.id;
    document.getElementById(id_frase_activa+"")!.removeAttribute("class");
    if(id_frase_activa == "3"){id_frase_activa = "-1";}
    const next_frase = document.getElementById(""+(parseInt(id_frase_activa)+1));
    next_frase?.setAttribute('class', 'frase_activa');
  }

  prev() {
    const class_frase_activa = document.getElementsByClassName("frase_activa");
    const child_frase_activa = class_frase_activa[0];
    let id_frase_activa = child_frase_activa.id;
    document.getElementById(id_frase_activa+"")!.removeAttribute("class");
    if(id_frase_activa == "0"){id_frase_activa = "4";}
    const next_frase = document.getElementById(""+(parseInt(id_frase_activa)-1));
    next_frase?.setAttribute('class', 'frase_activa');
  }

}
