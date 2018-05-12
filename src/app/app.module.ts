import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TerminalComponent } from './components/gamescreen/terminal/terminal.component';
import { StartscreenComponent } from './components/startscreen/startscreen.component';
import { AppRoutingModule } from './/app-routing.module';
import { GamescreenComponent } from './components/gamescreen/gamescreen.component';
import { LeaderboardscreenComponent } from './components/leaderboardscreen/leaderboardscreen.component';
import { QuestionComponent } from './components/question/question.component';
import { ScoreComponent } from './components/gamescreen/score/score.component';
import { QuestionsComponent } from './components/gamescreen/questions/questions.component';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import { MessagesComponent } from './components/gamescreen/terminal/messages/messages.component';
import { IntrotextComponent } from './components/introtext/introtext.component';


@NgModule({
  declarations: [
    AppComponent,
    TerminalComponent,
    StartscreenComponent,
    GamescreenComponent,
    LeaderboardscreenComponent,
    QuestionComponent,
    ScoreComponent,
    QuestionsComponent,
    MessagesComponent,
    IntrotextComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
