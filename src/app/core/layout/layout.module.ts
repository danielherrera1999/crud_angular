import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Routing } from 'src/app/modules/routing';
import { LayoutComponent } from './layout.component';
import { ContentComponent } from './components/content/content.component';


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: Routing
  }
]

@NgModule({
  declarations: [
    LayoutComponent,
    ContentComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class LayoutModule { }
