import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotesRepositoryDom } from './domain/notes/repository/notes.repository';
import { RepositoryImplService } from './data/notes/services/repository.impl';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [
    {provide: NotesRepositoryDom, useClass: RepositoryImplService},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
