import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  // social media Urls
  linkedInUrl = `https://www.linkedin.com/in/xiang-austin-li-7b0937120/`;
  twitterUrl = `https://twitter.com/Silentstorm1007`;
  githubUrl = `https://github.com/Senpaistorm`;
  emailUrl = `mailto:liaustin97@gmail.com`;

  constructor() { }

  ngOnInit() {
  }

}
