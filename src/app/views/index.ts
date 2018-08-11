import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActorLayoutComponent } from './actor-layout/actor-layout.component';
import { DirectorLayoutComponent } from './director-layout/director-layout.component';
import { EpisodeLayoutComponent } from './episode-layout/episode-layout.component';
import { GenreLayoutComponent } from './genre-layout/genre-layout.component';
import { StudioLayoutComponent } from './studio-layout/studio-layout.component';
import { WriterLayoutComponent } from './writer-layout/writer-layout.component';



@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    ActorLayoutComponent,
    DirectorLayoutComponent,
    EpisodeLayoutComponent,
    GenreLayoutComponent,
    StudioLayoutComponent,
    WriterLayoutComponent
  ],
  exports: [
    ActorLayoutComponent,
    DirectorLayoutComponent,
    EpisodeLayoutComponent,
    GenreLayoutComponent,
    StudioLayoutComponent,
    WriterLayoutComponent
  ]
})
export class ComponentModule { }