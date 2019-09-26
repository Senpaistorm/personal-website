import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  about_text1 = `Hi my name is Austin! I am a recent computer science graduate from University of Toronto Scarborough.
  I have a passion for solving complex problems and taking on challenges.
  Most of the time my motivations are driven by my competitive spirit. I love the idea of trying to be
  the best at what I do and being able to constantly improve myself at any subject. 
  I am a fast learner and I enjoy learning new technologies regularly to keep my mind fresh. 
  `

  about_text2 = `When I'm not doing work, you can usually find me playing video games.
  I enjoy playing MMORPG and strategic card games.
  Since 2015 I played Hearthstone professionally and was a well-known competitive player world-wide.
  For a long time I was the best overall ladder finisher in all North America for Hearthstone.
  Recently I have been focusing more on academics and shifting my gaming life into a more casual side.
  `

  about_text3 = `Here is my resume and my unofficial transcript. If you are interested in knowing more about me,
  feel free to send me an email in the contact section!`
  constructor() { }

  ngOnInit() {
  }

}
