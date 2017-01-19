import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipes/recipe';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] =[];
  recipe = new Recipe('dummy','dummy','http://vignette4.wikia.nocookie.net/scribblenauts/images/4/42/Crash_Test_Dummy.png/revision/latest?cb=20130309213400');

  constructor() { }

  ngOnInit() {
  }

}