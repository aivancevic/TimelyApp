import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoneprojectsComponent } from './components/doneProjects/doneprojects/doneprojects.component';
import { HomePageComponent } from './components/home/home-page/home-page.component';
import { StopTimerComponent } from './components/stopTimer/stop-timer/stop-timer.component';

const routes: Routes = [
  {
    path:'',
    component: HomePageComponent
  },
  {
    path:'start',
    component: StopTimerComponent
  },
  {
    path:'doneProjects',
    component: DoneprojectsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
