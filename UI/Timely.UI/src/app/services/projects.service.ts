import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Project } from '../models/TimelyModel';


@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  baseApiUrl: string = environment.baseApiUrl;
  private project: Project;
  
  constructor(private http: HttpClient) { }

  getProjects(): Observable<Project[]>{
     return this.http.get<Project[]>(this.baseApiUrl + '/api/Timely');
  }

  getProjectById(id: string):Observable<Project>{
    return this.http.get<Project>(this.baseApiUrl + '/api/Timely/' + id);
 }

  getProjectLatestDate(): Observable<Project>{
    return this.http.get<Project>(this.baseApiUrl + '/api/Timely/latestDate');
 }

  addProject(addProjectRequest: Project) : Observable<Project>{
    addProjectRequest.id = '00000000-0000-0000-0000-000000000000';
    return this.http.post<Project>(this.baseApiUrl + '/api/Timely', addProjectRequest);
  }


  updateProject(id: string, updateProjectRequest: Project): Observable<Project>{
    return this.http.put<Project>(this.baseApiUrl + '/api/Timely/' + id, updateProjectRequest);
  }

  deleteProject(id: string):Observable<Project>{
   return this.http.delete<Project>(this.baseApiUrl + '/api/Timely/delete/' + id);
  }

  saveProjectId(project: Project) {
    this.project = project;
  }

  getSavedProjectId(){
    return this.project;
  }
}
