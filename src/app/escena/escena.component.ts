import { HomeComponent } from './../home/home.component';
import { Component, Input, Renderer2, ElementRef, AfterViewInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-escena',
  templateUrl: './escena.component.html',
  styleUrls: ['./escena.component.scss']
})
export class EscenaComponent extends HomeComponent {
  contador = 0;
  next() {
    document.getElementById(""+this.contador)!.classList.remove("active");
    this.contador++
    if(this.contador == this.frases.length){this.contador = 0;}
    document.getElementById(""+this.contador)!.className = "active";
  }

  prev() {
    document.getElementById(""+this.contador)!.classList.remove("active");
    this.contador--
    if(this.contador == -1){this.contador = this.frases.length-1;}
    document.getElementById(""+this.contador)!.className = "active";
  }

}
