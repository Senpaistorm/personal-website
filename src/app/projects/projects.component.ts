import { Component, OnInit } from '@angular/core';
import {Project} from '../project';
import { projects } from '../projectData';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects: Project[];
  constructor() { }

  ngOnInit() {
    this.projects = projects;
  }
}
