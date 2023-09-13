import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotesRepositoryDom } from './domain/notes/repository/notes.repository';
import { RepositoryImplService } from './data/notes/services/repository.impl';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {provide: NotesRepositoryDom, useClass: RepositoryImplService},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
