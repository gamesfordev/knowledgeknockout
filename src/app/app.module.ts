import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TerminalComponent } from './components/terminal/terminal.component';
import { ResultComponent } from './components/result/result.component';
import { LeaderboardComponent } from './components/leaderboard/leaderboard.component';
import { GamescreenComponent } from './components/gamescreen/gamescreen.component';

@NgModule({
  declarations: [
    AppComponent,
    TerminalComponent,
    ResultComponent,
    LeaderboardComponent,
    GamescreenComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
