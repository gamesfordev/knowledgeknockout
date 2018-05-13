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
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { MessagesComponent } from './components/gamescreen/terminal/messages/messages.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { IntrotextComponent } from './components/introtext/introtext.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { SoundService } from './services/sound/sound.service';

export const firebaseConfig = {
  apiKey: 'AIzaSyDMMidHRCvtAb25JE-WyAeG0W6PvZmRtNc',
  authDomain: 'angula-4308e.firebaseapp.com',
  databaseURL: 'https://angula-4308e.firebaseio.com',
  projectId: 'angula-4308e',
  storageBucket: '',
  messagingSenderId: '536634131867',
};

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
    IntrotextComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    FormsModule,
    NgbModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
  ],
  providers: [SoundService],
  bootstrap: [AppComponent],
})
export class AppModule {}
