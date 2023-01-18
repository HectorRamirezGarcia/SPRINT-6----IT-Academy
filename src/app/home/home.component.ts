import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  join = true;
  @Input() public frases = [
    { frase: "El nostre heroi estava surant l'espai sideral quan la llunyania va albirar una nau espacial.", img: "../../assets/img/1.jpg" },
    { frase: "Sentia curiositat per l'interior de la nau i es va posar a inspeccionar-la. Va arribar a una sala amb dues portes.", img: "../../assets/img/2.jpg"},
    { frase: "L'heroi va decidir travessar la porta que el portava a casa", img: "../../assets/img/3.jpg" },
    { frase: "Mentrestant, altres heroes no van tenir tanta sort en la seva elecció ...", img: "../../assets/img/4.jpg" },
  ];
}
