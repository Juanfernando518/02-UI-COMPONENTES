import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderHeuristicaComponent } from '../header-heuristica/header-heuristica';


@Component({
  selector: 'app-h2-page',
  standalone: true,
  imports: [CommonModule, HeaderHeuristicaComponent],
  templateUrl: './h2-page.html'
})
export class H2Page {
  lastOperation = signal('');

  executeOperation(action: string) {
    this.lastOperation.set(action);
  }
}
