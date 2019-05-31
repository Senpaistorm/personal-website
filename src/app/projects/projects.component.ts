import { Component, OnInit } from '@angular/core';
import {Project} from '../project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  projects : Project[] = [
    {id:4, name:"Bomb Man", description:``,
     primaryLink:`https://github.com/UTSCC09/project-webgl-game`, secondaryLink:`https://bombman.me`,
    icon:``},
    {id:3, name:"Course Manager", description:`A web app that can manage your courses, grades, and computes your current overall mark as well 
     as a weighted average to see your mark progressively. This app has a simple to use interface that allows users to add or remove courses and 
     update marks with ease. The website is written with the django framework and SQLite database.`,
     primaryLink:`https://github.com/Senpaistorm/crs-manager`, secondaryLink:`https://www.austinlx.com/coursemanager`,
     icon:``},
    {id:2, name:"Path tracer", description:`A program in C that renders a simple scene by tracing paths of which light would take in the scene.
     Techniques like explicit sampling, importance sampling are implemented to reduce noise in the generated scene.`,
     primaryLink:`https://github.com/Senpaistorm/Path-Tracer`, secondaryLink:``,
     icon:``},
    {id:1, name:"Ray tracer", description:`A program in C that renders a simple scene by tracing light rays from the center of projection using 
    the Phong model. This program demonstrates many key concepts in computer graphics such as area light sources, shadows, refraction, reflection,
     normal mapping, etc. More details on how to use the program can be found inside the repository. `,
     primaryLink:`https://github.com/Senpaistorm/Ray-Tracer`, secondaryLink:``,
     icon:``},
  ]
}
