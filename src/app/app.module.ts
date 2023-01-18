import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GameService } from './game.service';

import { AppComponent } from './app.component';
import { MoleBoardComponent } from './board/moleboard.component';

@NgModule({
  declarations: [AppComponent, MoleBoardComponent],
  imports: [BrowserModule],
  providers: [GameService],
  bootstrap: [AppComponent],
})
export class AppModule {}
