import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Actor } from './actor/actor.component';
import { Director } from './director/director.component';
import { Episode } from './episode/episode.component';
import { Genre } from './genre/genre.component';
import { Studio } from './studio/studio.component';
import { Writer } from './writer/writer.component';



@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    Actor,
    Director,
    Episode,
    Genre,
    Studio,
    Writer
  ],
  exports: [
    Actor,
    Director,
    Episode,
    Genre,
    Studio,
    Writer
  ]
})
export class ComponentModule { }