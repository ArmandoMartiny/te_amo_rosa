import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Necesario para *ngFor y [ngStyle]
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.html',  // <-- ¡Corregido!
  styleUrl: './app.css'        // <-- ¡Corregido!
})
export class AppComponent implements OnInit {
  // Arreglo para guardar nuestros elementos animados
  elementosAnimados: any[] = [];
  cantidadElementos = 40; // Total de corazones y flores

  ngOnInit() {
    for (let i = 0; i < this.cantidadElementos; i++) {
      this.elementosAnimados.push(this.generarElemento());
    }
  }

  generarElemento() {
    // 50% de probabilidad de ser corazón o flor
    const tipo = Math.random() > 0.5 ? 'corazon' : 'flor';

    // Propiedades aleatorias para que luzca genial
    const estilo = {
      'left': `${Math.random() * 100}vw`, // Posición horizontal
      'animation-delay': `${Math.random() * 10}s`, // Retraso
      'animation-duration': `${5 + Math.random() * 10}s`, // Duración
      'transform': `scale(${0.5 + Math.random()})` // Tamaños
    };

    return { tipo, estilo };
  }
}
