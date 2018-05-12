import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TerminalComponent } from './components/gamescreen/terminal/terminal.component';
import { StartscreenComponent } from './components/startscreen/startscreen.component';
import { AppRoutingModule } from './/app-routing.module';
import { GamescreenComponent } from './components/gamescreen/gamescreen.component';
import { LeaderboardscreenComponent } from './components/leaderboardscreen/leaderboardscreen.component';
import { ScoreComponent } from './components/gamescreen/score/score.component';
import { QuestionsComponent } from './components/gamescreen/questions/questions.component';


@NgModule({
  declarations: [
    AppComponent,
    TerminalComponent,
    StartscreenComponent,
    GamescreenComponent,
    LeaderboardscreenComponent,
    ScoreComponent,
    QuestionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
