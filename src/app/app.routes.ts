import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./products/features/product.route')
    },
    {
        path: '**',
        redirectTo: 'products'
    }
];
