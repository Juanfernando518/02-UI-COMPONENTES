import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderHeuristicaComponent } from '../header-heuristica/header-heuristica';

@Component({
  selector: 'h10-page',
  standalone: true,
  imports: [CommonModule, HeaderHeuristicaComponent],
  templateUrl: './h10-page.html'
})
export class H10Page {

  // Para el ejemplo bueno
  showHelp = signal(false);

  toggleHelp() {
    this.showHelp.update(v => !v);
  }
}
