import { Component, OnInit, ViewChild } from '@angular/core';
import {Project} from 'src/app/models/TimelyModel';
import { ProjectsService } from 'src/app/services/projects.service';
import { Router } from '@angular/router';

import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.css']
})
export class ProjectsListComponent implements OnInit {
  
  projects : Project[];

  dataSource: any;
  displayedColumns: string[] = [
    'projectName',
    'start',
    'stop',
    'duration',
    'id'
  ];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private projectsService: ProjectsService, private router: Router){

  }

  ngOnInit(): void {
    this.projectsService.getProjects()
    .subscribe({
      next: (projects) => {
        this.projects = <Project[]>projects;
        console.log(this.projects)
        this.dataSource = new MatTableDataSource<Project>(this.projects);
        this.dataSource.paginator = this.paginator;
      },
      error: (response) => {
        alert(response + "\nCan't get projects")
      }
    });
  }

  isEqualToDefaultDate(dateToCompare: Date){
    var defaultDate = new Date(0,0,0);
    defaultDate.setDate(30);
    defaultDate.setHours(23);
    dateToCompare = new Date(dateToCompare);
    if(dateToCompare.getTime() === defaultDate.getTime())
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

  deleteProject(id:string){
    this.projectsService.deleteProject(id).subscribe({
      next:(response) => {
        location.reload();
        this.router.navigate(['doneProjects']);
      }
    });
  }
}
