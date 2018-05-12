import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TerminalComponent } from './components/terminal/terminal.component';
import { ResultComponent } from './components/result/result.component';
import { LeaderboardComponent } from './components/leaderboard/leaderboard.component';
<<<<<<< HEAD
import { StartscreenComponent } from './components/startscreen/startscreen.component';
import { AppRoutingModule } from './/app-routing.module';
=======
import { GamescreenComponent } from './components/gamescreen/gamescreen.component';
>>>>>>> 7a2c3e5bb7196c0e20ec195c507dcec094125884

@NgModule({
  declarations: [
    AppComponent,
    TerminalComponent,
    ResultComponent,
    LeaderboardComponent,
<<<<<<< HEAD
    StartscreenComponent
=======
    GamescreenComponent
>>>>>>> 7a2c3e5bb7196c0e20ec195c507dcec094125884
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
