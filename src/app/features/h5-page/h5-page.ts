import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderHeuristicaComponent } from '../header-heuristica/header-heuristica';

@Component({
  selector: 'app-h5-page',
  standalone: true,
  imports: [CommonModule, FormsModule, HeaderHeuristicaComponent],
  templateUrl: `./h5-page.html`
})
export class H5Page {

  // 👇 Estados para versión buena
  accountNumber = '';
  amount = '';
  processing = false;

  // Validación formato de cuenta (10 números)
  validAccount() {
    return /^[0-9]{10}$/.test(this.accountNumber);
  }

  validAmount() {
    return Number(this.amount) > 0;
  }

  readyToTransfer() {
    return this.validAccount() && this.validAmount();
  }

  transfer() {
    if (!this.readyToTransfer() || this.processing) return;

    this.processing = true;

    setTimeout(() => {
      alert('Transferencia completada exitosamente ✔');
      this.processing = false;
    }, 2000);
  }
}
