import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-escena',
  templateUrl: './escena.component.html',
  template:`<p>{{salida_frase}}</p>`,
  styleUrls: ['./escena.component.scss']
})
export class EscenaComponent implements OnInit {
  @Input() public frases = [
    " El nostre heroi estava surant l'espai sideral quan la llunyania va albirar una nau espacial", 
    "Sentia curiositat per l'interior de la nau i es va posar a inspeccionar-la. Va arribar a una sala amb dues portes.", 
    "L'heroi va decidir travessar la porta que el portava a casa", 
    "Mentrestant, altres heroes no van tenir tanta sort en la seva elecció ..."
  ];

  constructor(){}
  ngOnInit(): void {
    
  }

}
