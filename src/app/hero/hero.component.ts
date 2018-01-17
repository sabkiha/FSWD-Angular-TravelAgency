import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
	private heroHeading: string;
	private heroText: string;
	private heroBtnText: string;
	private heroBtnUrl: string;

  constructor() {
  	this.heroHeading = "Get Away From It All | Travel Agency";
  	this.heroText = "Specialising in relaxing retreats.";
  }

  ngOnInit() {
  }

}
