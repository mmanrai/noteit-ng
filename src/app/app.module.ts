import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { NotesComponent } from './notes/notes.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {FeedbackComponent} from "./feedback/feedback.component";
import {Router, RouterModule, Routes} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

const appRoutes : Routes  = [
  {
    path: 'notes',
    component:NotesComponent
  },
  {
    path: 'feedback',
    component:FeedbackComponent
  },
  {
    path: '',
    component: NotesComponent,
    pathMatch: 'full'
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FeedbackComponent,
    NotesComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, {enableTracing:true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
