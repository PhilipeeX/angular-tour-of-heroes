import { Component, OnInit } from '@angular/core';
import {Hero} from '../../models/hero';
import { HEROES } from '../../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };

  heroes: Hero[] = HEROES;

  constructor() { }

  ngOnInit(): void {
  }

}
