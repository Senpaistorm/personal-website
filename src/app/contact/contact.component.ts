import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  // social media Urls
  linkedInUrl = ``
  twitterUrl = `twitter.com/Silentstorm1007`
  githubUrl = `github.com/Senpaistorm`
  email = `austin.l@qq.com`

  constructor() { }

  ngOnInit() {
  }

}
