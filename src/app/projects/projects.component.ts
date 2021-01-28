import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  cards: any[] = [1,2,3,4,5,6,7,8,9,10];

  constructor() { }

  ngOnInit() {
  }

}
