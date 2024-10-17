import { Routes } from '@angular/router';

export const routes: Routes = [

    {
        path: 'dashboard',
        loadComponent: () => import('./dashboard/dashboard.component').then(m => m.DashboardComponent),
        children: [
            {
                path: 'about-me',
                title: 'About Me',
                loadComponent: () => import('./dashboard/pages/about-me/about-me.component').then(m => m.AboutMeComponent)
            },
            {
                path: 'projects',
                title: 'Projects',
                loadComponent: () => import('./dashboard/pages/proyects/proyects.component').then(m => m.ProyectsComponent)
            },
            {
                path:'',
                redirectTo: 'about-me',
                pathMatch: 'full'
            }
        ]

    },

    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    }

];
