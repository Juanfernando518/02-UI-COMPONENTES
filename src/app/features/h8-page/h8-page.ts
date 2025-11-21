import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeaderHeuristicaComponent } from '../header-heuristica/header-heuristica';

@Component({
  selector: 'app-h8-page',
  imports: [CommonModule, HeaderHeuristicaComponent],
  templateUrl: './h8-page.html',
  styleUrl: './h8-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class H8Page { }
