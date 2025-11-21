import { Routes } from '@angular/router';

export const heuristicaRoutes: Routes = [
    // Rutas con nombres descriptivos (recomendado)
    {
        path: 'visibilidad-estado-sistema',
        loadComponent: () => import('./h1-page/h1-page').then(m => m.H1Page)
    },
    {
        path: 'correspondencia-mundo-real',
        loadComponent: () => import('./h2-page/h2-page').then(m => m.H2Page) // Temporal, cambiar por H2Page cuando esté listo
    },
    {
        path: 'control-libertad-usuario',
        loadComponent: () => import('./h3-page/h3-page').then(m => m.H3Page) // Temporal, cambiar por H3Page cuando esté listo
    },
    {
        path: 'consistencia-estandares',
        loadComponent: () => import('./h4-page/h4-page').then(m => m.H4Page) // Temporal, cambiar por H4Page cuando esté listo
    },
    {
        path: 'prevencion-errores',
        loadComponent: () => import('./h5-page/h5-page').then(m => m.H5Page) // Temporal, cambiar por H5Page cuando esté listo
    },
    {
        path: 'reconocimiento-recordar',
        loadComponent: () => import('./h6-page/h6-page').then(m => m.H6Page) // Temporal, cambiar por H6Page cuando esté listo
    },
    {
        path: 'flexibilidad-eficiencia',
        loadComponent: () => import('./h7-page/h7-page').then(m => m.H7Page) // Temporal, cambiar por H7Page cuando esté listo
    },
    {
        path: 'diseno-estetico-minimalista',
        loadComponent: () => import('./h8-page/h8-page').then(m => m.H8Page) // Temporal, cambiar por H8Page cuando esté listo
    },
    {
        path: 'ayuda-reconocer-errores',
        loadComponent: () => import('./h9-page/h9-page').then(m => m.H9Page) // Temporal, cambiar por H9Page cuando esté listo
    },
    {
        path: 'ayuda-documentacion',
        loadComponent: () => import('./h10-page/h10-page').then(m => m.H10Page) // Temporal, cambiar por H10Page cuando esté listo
    },

    // También mantenemos las rutas con números para compatibilidad
    {
        path: '1',
        redirectTo: 'visibilidad-estado-sistema'
    },
    {
        path: '2',
        redirectTo: 'correspondencia-mundo-real'
    },
    {
        path: '3',
        redirectTo: 'control-libertad-usuario'
    },
    {
        path: '4',
        redirectTo: 'consistencia-estandares'
    },
    {
        path: '5',
        redirectTo: 'prevencion-errores'
    },
    {
        path: '6',
        redirectTo: 'reconocimiento-recordar'
    },
    {
        path: '7',
        redirectTo: 'flexibilidad-eficiencia'
    },
    {
        path: '8',
        redirectTo: 'diseno-estetico-minimalista'
    },
    {
        path: '9',
        redirectTo: 'ayuda-reconocer-errores'
    },
    {
        path: '10',
        redirectTo: 'ayuda-documentacion'
    },

    // Ruta por defecto
    {
        path: '',
        redirectTo: 'visibilidad-estado-sistema',
        pathMatch: 'full'
    },

    // Ruta wildcard para rutas no encontradas
    {
        path: '**',
        redirectTo: 'visibilidad-estado-sistema'
    }
];