import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogComponent } from '../../modalDialog/dialog/dialog.component';
import { ProjectsService } from 'src/app/services/projects.service';
import { Project } from 'src/app/models/TimelyModel';

export interface DialogData {
  projectID: string;
}

@Component({
  selector: 'app-stop-timer',
  templateUrl: './stop-timer.component.html',
  styleUrls: ['./stop-timer.component.css']
})

export class StopTimerComponent implements OnInit {

  projects : Project;

  constructor(private dialog : MatDialog, private router: Router, private projectsService: ProjectsService){
    
  }

  openDialog(): void {
    this.dialog.open(DialogComponent, {
    });
  }

  ngOnInit(): void {
    this.projectsService.GetProjectLatestDate()
      .subscribe({
        next: (project) => {
          this.projectsService.saveProjectId(project);
        },
        error: (response) => {
          alert(response + "\nCan't get projects")
        }
      })
  }

}
