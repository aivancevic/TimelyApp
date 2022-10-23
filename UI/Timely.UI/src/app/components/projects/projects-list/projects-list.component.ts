import { Component, OnInit } from '@angular/core';
import {Project} from 'src/app/models/TimelyModel';
import {MatDialog, MatDialogRef, MatDialogState, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogComponent } from '../../modalDialog/dialog/dialog.component';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.css']
})
export class ProjectsListComponent implements OnInit {


  projects : Project[];

  constructor(private projectsService: ProjectsService){

  }
  ngOnInit(): void {
    this.projectsService.GetProjects()
    .subscribe({
      next: (projects) => {
        this.projects = <Project[]>projects;
      },
      error: (response) => {
        alert(response + "\nCan't get projects")
      }
    });

  }

  isEqualToDefaultDate(dateToComapre: Date){
    var defaultDate = new Date(0,0,0);
    defaultDate.setDate(30);
    defaultDate.setHours(23);
    dateToComapre = new Date(dateToComapre);
    if(dateToComapre.getTime() === defaultDate.getTime())
      return true
    else
      return false
  }

  displayDateInCorrectFormat(dateToFormat: Date){
    var dateFormatString = new Date(dateToFormat).toDateString() + " " + new Date(dateToFormat).toLocaleTimeString()
    return dateFormatString;
  }

  displayDurationInCorrectFormat(dateToFormat: Date){
    var dateFormatString = new Date(dateToFormat).toISOString().substr(14,5);
    return dateFormatString
  }
}
