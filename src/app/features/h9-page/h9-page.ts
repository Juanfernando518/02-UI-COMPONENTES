import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderHeuristicaComponent } from '../header-heuristica/header-heuristica';

@Component({
  selector: 'h9-page',
  standalone: true,
  imports: [CommonModule, FormsModule, HeaderHeuristicaComponent],
  templateUrl: './h9-page.html'
})
export class H9Page {
  // Ejemplo BUENO — error claro
  email = '';
  error = signal<string | null>(null);

  enviar() {
    if (!this.email.includes('@')) {
      this.error.set('El correo no es válido. Asegúrate de incluir "@"');
      return;
    }

    this.error.set(null);
    alert('Formulario enviado');
  }

  limpiarError() {
    this.error.set(null);
  }
}
