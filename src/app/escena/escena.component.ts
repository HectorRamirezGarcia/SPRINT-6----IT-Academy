import { HomeComponent } from './../home/home.component';
import { Component, ElementRef} from '@angular/core';

@Component({
  selector: 'app-escena',
  templateUrl: './escena.component.html',
  styleUrls: ['./escena.component.scss']
})
export class EscenaComponent extends HomeComponent {
  contador = 0;
  bg_img = "url('../../assets/img/"+(this.contador+1)+".jpg')";
  next() {
    document.getElementById(""+this.contador)!.classList.remove("active");
    this.contador++
    if(this.contador == this.frases.length){this.contador = 0;}
    this.bg_img = "url('../../assets/img/"+(this.contador+1)+".jpg')";
    document.getElementById(""+this.contador)!.className = "active";
  }

  prev() {
    document.getElementById(""+this.contador)!.classList.remove("active");
    this.contador--
    if(this.contador == -1){this.contador = this.frases.length-1;}
    this.bg_img = "url('../../assets/img/"+(this.contador+1)+".jpg')";
    document.getElementById(""+this.contador)!.className = "active";
  }

}
