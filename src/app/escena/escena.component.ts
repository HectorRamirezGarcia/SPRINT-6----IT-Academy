import { HomeComponent } from './../home/home.component';
import { Component, ElementRef, Input} from '@angular/core';

@Component({
  selector: 'app-escena',
  templateUrl: './escena.component.html',
  styleUrls: ['./escena.component.scss']
})
export class EscenaComponent extends HomeComponent {
  contador = 0;
  bg_img = "url('../../assets/img/"+(this.contador+1)+".jpg')";
  next() {
    this.contador++;
    if(this.contador == this.frases.length){this.contador = 0;}
    this.bg_img = "url('../../assets/img/"+(this.contador+1)+".jpg')";
  }
  prev() {
    this.contador--;
    if(this.contador == -1){this.contador = this.frases.length-1;}
    this.bg_img = "url('../../assets/img/"+(this.contador+1)+".jpg')";
  }
}
