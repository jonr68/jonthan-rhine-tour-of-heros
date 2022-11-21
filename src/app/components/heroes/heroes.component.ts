import { Component, OnInit } from '@angular/core';
import { Hero } from '/Users/yorkmacbook068/angularProjects/tour-of-heroes/src/app/hero';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
