import { Routes } from '@angular/router';
import { InterfazPage } from './features/interfaz-page/interfaz-page';
import { H1Page } from './features/h1-page/h1-page';
import { H2Page } from './features/h2-page/h2-page';
import { H3Page } from './features/h3-page/h3-page';
import { H4Page } from './features/h4-page/h4-page';
import { H6Page } from './features/h6-page/h6-page';
import { H5Page } from './features/h5-page/h5-page';
import { FormularioPage } from './features/formulario-page/formulario-page';
import { H7Page } from './features/h7-page/h7-page';
import { H8Page } from './features/h8-page/h8-page';
import { H9Page } from './features/h9-page/h9-page';
import { H10Page } from './features/h10-page/h10-page';

export const routes: Routes = [
  { path: '', component: InterfazPage },
  
  // Heurísticas
  { path: 'heuristica/1', component: H1Page },
  { path: 'heuristica/2', component: H2Page },
  { path: 'heuristica/3', component: H3Page },
  { path: 'heuristica/4', component: H4Page },
  { path: 'heuristica/5', component: H5Page }, 
  { path: 'heuristica/6', component: H6Page },
  { path: 'heuristica/7', component: H7Page },
  { path: 'heuristica/8', component: H8Page },
  { path: 'heuristica/9', component: H9Page },
  { path: 'heuristica/10', component: H10Page },
  { path: 'formulario', component: FormularioPage },
  
  // Ruta comodín por si alguien escribe algo mal
  { path: '**', redirectTo: '' }
];
