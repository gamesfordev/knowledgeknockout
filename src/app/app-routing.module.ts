import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartscreenComponent } from './components/startscreen/startscreen.component';
import { GamescreenComponent } from './components/gamescreen/gamescreen.component';
import { LeaderboardscreenComponent } from './components/leaderboardscreen/leaderboardscreen.component';


const routes: Routes = [
  {path : 'start', component : StartscreenComponent},
  {path : '', component : StartscreenComponent},
  {path : 'game', component : GamescreenComponent},
  {path : 'finish', component : LeaderboardscreenComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { initialNavigation: 'enabled' }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
