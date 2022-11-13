import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from 'src/app/models/TimelyModel';
import { ProjectsService } from 'src/app/services/projects.service';
import { DialogData } from '../../stopTimer/stop-timer/stop-timer.component';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  projectID: string;

  projectDetail: Project = {
    id: '',
    projectName: '...',
    start: new Date(),
    stop: new Date(),
    duration: new Date(0,0,0)
  };

  constructor(
    private projectsService: ProjectsService, 
    private router: Router, 
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,) {
  }

  ngOnInit(): void {
    const proj = this.projectsService.getSavedProjectId()
    this.projectsService.getProjectById(proj.id).subscribe({
      next: (response) =>{
        this.projectDetail = response;
        this.projectDetail.id = response.id;
      }
    })
  }
  
  updateProject(){
    this.projectDetail.stop = new Date(Date.now());
    var startSec = new Date(this.projectDetail.start).getTime()
    var endSec = new Date(this.projectDetail.stop).getTime()
    var seconds = this.timeDifference(startSec, endSec);
    const dateSeconds = new Date(seconds)
    this.projectDetail.duration = dateSeconds;
    this.projectsService.updateProject(this.projectDetail.id, this.projectDetail).subscribe({
      next: () =>{
        this.router.navigate(['doneProjects']);
      }
    })
  }

  timeDifference(start: number, stop: number){
    return (stop - start);
  }

}
