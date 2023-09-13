import { Routes } from "@angular/router";

const Routing: Routes = [
  {
    path: 'notes',
    loadChildren: () =>
      import('./notes/notes.module').then((_) => _.NotesModule),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((_) => _.HomeModule),
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'error/404',
  },
]

export { Routing }
