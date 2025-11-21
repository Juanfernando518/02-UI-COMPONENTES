import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderHeuristicaComponent } from '../header-heuristica/header-heuristica';


@Component({
  selector: 'app-h4-page',
  standalone: true,
  imports: [CommonModule, HeaderHeuristicaComponent],
  templateUrl: './h4-page.html'
})
export class H4Page { }
