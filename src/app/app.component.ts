import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  pageTitle = 'Xiang (Austin) Li';
  aboutTitle = 'About';
  projectsTitle = 'Projects';
  contactsTitle = 'Contact';


  onClick(event: any){
    let elements = document.getElementsByClassName("nav-link");
    Array.from(elements).forEach(function(element){
      element.classList.remove("active");
    })
      
    event.preventDefault();
    event.target.className += " active";
  }
}
