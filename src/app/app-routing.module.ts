import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ScorecardComponent } from './components/scorecard/scorecard.component';


const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'scorecard/:id', component: ScorecardComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
