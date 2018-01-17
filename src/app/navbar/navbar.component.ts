import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})

export class NavbarComponent implements OnInit {
	private projectName:string;
	constructor() {
		this.projectName = "Get Away From It All | Travel Agency";
	}

 ngOnInit() {
 }
}