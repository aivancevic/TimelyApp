import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectsListComponent } from './components/projects/projects-list/projects-list.component';
import { HomePageComponent } from './components/home/home-page/home-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {MatDialogModule} from '@angular/material/dialog';
import { DialogComponent } from './components/modalDialog/dialog/dialog.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DoneprojectsComponent } from './components/doneProjects/doneprojects/doneprojects.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { StopTimerComponent } from './components/stopTimer/stop-timer/stop-timer.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectsListComponent,
    HomePageComponent,
    DialogComponent,
    DoneprojectsComponent,
    StopTimerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
