import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import {Project} from 'src/app/models/TimelyModel';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-doneprojects',
  templateUrl: './doneprojects.component.html',
  styleUrls: ['./doneprojects.component.css']
})
export class DoneprojectsComponent implements OnInit {
  public projects : Project[];
  constructor(private projectsService: ProjectsService) { }

  ngOnInit(): void {
    this.projectsService.GetProjects()
    .subscribe({
      next: (projects) => {
        this.projects = <Project[]>projects;
      },
      error: (response) => {
        alert(response + "\nCan't get projects")
      }
    })
  }
}
