import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { Actor } from './actor/actor.component';
import { Director } from './director/director.component';
import { Episode } from './episode/episode.component';
import { Genre } from './genre/genre.component';
import { Studio } from './studio/studio.component';
import { Writer } from './writer/writer.component';


@NgModule({
  declarations: [
    AppComponent,
    Actor,
    Director,
    Episode,
    Genre,
    Studio,
    Writer
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
