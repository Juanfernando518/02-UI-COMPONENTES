import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderHeuristicaComponent } from '../header-heuristica/header-heuristica';

@Component({
  selector: 'h7-page',
  standalone: true,
  imports: [CommonModule, FormsModule, HeaderHeuristicaComponent],
  templateUrl: './h7-page.html'
})
export class H7Page {  
  // Para el ejemplo bueno (atajo)
  text = '';
  showShortcutHelp = false;

  onKeydown(event: KeyboardEvent) {
    if (event.ctrlKey && event.key === 'k') {
      event.preventDefault();
      this.text = '✨ Atajo aplicado: CTRL + K';
    }
  }
}
