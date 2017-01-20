import { Component, Input } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'food-list',
  template: `
    <ul>
      <li *ngFor="let currentFood of childFoodList">"{{currentFood.name}}" Calories: {{currentFood.calories}}
      </li>
    </ul>
  `
})
export class FoodListComponent {
  @Input() childFoodList: Food[];

}