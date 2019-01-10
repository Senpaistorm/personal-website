import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  about_text = `Hi my name is Austin! I am a UTSC undergraduate studying software engineer in my
  "4th year graduating in 2019. I have a passion for solving complex problems 
  and taking on challenges.
  Most of the time my motivations are driven by my competitive spirit. I love the idea of being
  the best at what I do and being able to compete against others of the same level. 

  I will try to showcase some of my favorite projects I built over my CS career.
  Some are school projects in the past which I find very interesting. Others are done purely on my own
  interest as a quality-of-life tool, entertainment or demonstration of a concept.

  When I'm not doing work, you can usually find me playing Hearthstone, World of Warcraft, 
  or Artifact. I used to play Hearthstone professionally and was a well-known player world-wide. You can 
  find more details about me and my esports experience in the gaming section.
  `

  constructor() { }

  ngOnInit() {
  }

}
