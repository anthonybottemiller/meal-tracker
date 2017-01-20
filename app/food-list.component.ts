import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'food-list',
  template: `
    <ul>
      <li *ngFor="let currentFood of childFoodList">{{currentFood.name}}
      </li>
    </ul>
  `
})
export class FoodListComponent {
  @Input() childFoodList: Food[];

}