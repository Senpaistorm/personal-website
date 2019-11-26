import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  about_text1 = `Hello and welcome to my website! I am a recent computer science graduate from University of Toronto Scarborough.
  I have a passion for solving complex problems and taking on challenges.
  Most of the time my motivations are driven by my competitive spirit. I love the idea of trying to be
  the best at what I do and being able to constantly improve myself at any subject.
  I am a fast learner and I enjoy learning new technologies regularly to keep my mind fresh.
  `;

  about_text2 = `When I'm not doing work, you can usually find me playing video games.
  I enjoy playing MMORPG and strategic card games.
  From 2015 - 2018 I played Hearthstone professionally and was a well-known competitive player world-wide.
  For a long time I was averaging the highest overall ladder finisher in North America.
  `;

  constructor() { }

  ngOnInit() {
  }

}
