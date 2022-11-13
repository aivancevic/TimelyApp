import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from 'src/app/models/TimelyModel';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  addProjectRequest: Project={
    id: '',
    projectName: '...',
    start: new Date(Date.now()),
    stop: new Date(0,0,0),
    duration: new Date(0,0,0)
  };
  constructor(private projectsService: ProjectsService, private router: Router) { }

  ngOnInit(): void {
  }

    addProject(){
      this.projectsService.addProject(this.addProjectRequest)
      .subscribe({
        next: () => {
          this.router.navigate(['start'])
        },
        error: (response) => {
          alert(response + "\nCan't add projects")
        }
      })
    }
}
