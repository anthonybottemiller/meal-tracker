import { Component } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'app-root',
  template: `
  <h1>Meal Tracker</h1>
  <food-list [childFoodList]="masterFoodList"></food-list>
  `
})

export class AppComponent {
masterFoodList: Food[] = [
  new Food(100, 'Success fries', 'It works so far have some potatoe!')
];

}
