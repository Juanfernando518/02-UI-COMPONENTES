import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { HeaderHeuristicaComponent } from "../header-heuristica/header-heuristica";


@Component({
  selector: 'app-h6-page',
  standalone: true,
  imports: [CommonModule, FormsModule, HeaderHeuristicaComponent],
  templateUrl: './h6-page.html'
})
export class H6Page {

  /* ============================
          VERSION MALA
  ============================ */
  size = '';
  crust = '';
  toppings = '';

  /* ============================
          VERSION BUENA
  ============================ */

  selectedSize = signal('');
  selectedCrust = signal('');
  selectedToppings = signal<string[]>([]);

  sizeOptions = [
    { value: 'small', name: 'Personal', icon: '🍕', price: '$8.99' },
    { value: 'medium', name: 'Mediana', icon: '🍕', price: '$12.99' },
    { value: 'large', name: 'Grande', icon: '🍕', price: '$15.99' },
    { value: 'xlarge', name: 'Familiar', icon: '🍕', price: '$18.99' }
  ];

  crustOptions = [
    { value: 'thin', name: 'Delgada', icon: '🥖', description: 'Crujiente y ligera' },
    { value: 'thick', name: 'Gruesa', icon: '🍞', description: 'Suave y esponjosa' },
    { value: 'stuffed', name: 'Rellena', icon: '🧀', description: 'Con queso en el borde' }
  ];

  toppingOptions = [
    { value: 'pepperoni', name: 'Pepperoni', icon: '🍕', price: '1.50' },
    { value: 'mushrooms', name: 'Champiñones', icon: '🍄', price: '1.00' },
    { value: 'olives', name: 'Aceitunas', icon: '🫒', price: '1.00' },
    { value: 'peppers', name: 'Pimientos', icon: '🌶️', price: '1.00' },
    { value: 'onions', name: 'Cebollas', icon: '🧅', price: '0.75' },
    { value: 'tomatoes', name: 'Tomates', icon: '🍅', price: '1.00' },
    { value: 'cheese', name: 'Queso Extra', icon: '🧀', price: '2.00' },
    { value: 'ham', name: 'Jamón', icon: '🥓', price: '2.00' }
  ];

  selectSize(size: string) { this.selectedSize.set(size); }
  selectCrust(crust: string) { this.selectedCrust.set(crust); }

  toggleTopping(t: string) {
    const list = this.selectedToppings();
    this.selectedToppings.set(
      list.includes(t) ? list.filter(x => x !== t) : [...list, t]
    );
  }

  isSelected(t: string) {
    return this.selectedToppings().includes(t);
  }

  canOrder() {
    return this.selectedSize() !== '' && this.selectedCrust() !== '';
  }

  getSelectedSizeName() {
    return this.sizeOptions.find(s => s.value === this.selectedSize())?.name ?? '';
  }

  getSelectedCrustName() {
    return this.crustOptions.find(c => c.value === this.selectedCrust())?.name ?? '';
  }

  getSizePrice() {
    const size = this.sizeOptions.find(s => s.value === this.selectedSize());
    return size ? parseFloat(size.price.replace('$','')) : 0;
  }

  getToppingsPrice() {
    return this.selectedToppings().reduce((total, topping) => {
      const obj = this.toppingOptions.find(t => t.value === topping);
      return total + (obj ? parseFloat(obj.price) : 0);
    }, 0);
  }

  getTotal() {
    return (this.getSizePrice() + this.getToppingsPrice()).toFixed(2);
  }

  getSelectedToppingsNames() {
    return this.selectedToppings()
      .map(t => this.toppingOptions.find(o => o.value === t)?.name)
      .join(', ');
  }
}
