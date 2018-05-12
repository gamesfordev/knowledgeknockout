import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TerminalComponent } from './components/terminal/terminal.component';
import { ResultComponent } from './components/result/result.component';
import { LeaderboardComponent } from './components/leaderboard/leaderboard.component';
import { StartscreenComponent } from './components/startscreen/startscreen.component';
import { AppRoutingModule } from './/app-routing.module';
import { GamescreenComponent } from './components/gamescreen/gamescreen.component';
import { LeaderboardscreenComponent } from './components/leaderboardscreen/leaderboardscreen.component';


@NgModule({
  declarations: [
    AppComponent,
    TerminalComponent,
    ResultComponent,
    LeaderboardComponent,
    StartscreenComponent,
    GamescreenComponent,
    LeaderboardscreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
