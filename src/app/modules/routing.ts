import { Routes } from "@angular/router";

const Routing: Routes = [
  {
    path: 'notes',
    loadChildren: () =>
      import('./notes/notes.module').then((_) => _.NotesModule),
  },
  {
    path: '',
    redirectTo: '/notes',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'error/404',
  },
]

export { Routing }
