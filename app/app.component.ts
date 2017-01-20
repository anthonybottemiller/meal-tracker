import { Component } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'app-root',
  template: `
  <h1>Meal Tracker</h1>
  <div class="col-sm-3">
    <food-list [childFoodList]="masterFoodList" (clickSender)="editFood($event)"></food-list>
  </div>
  <div class="col-sm-6">
    <edit-food [childSelectedFood]="selectedFood"></edit-food>
    <new-food (newFoodSender)="addFood($event)"></new-food>
  </div>
  `
})

export class AppComponent {
  masterFoodList: Food[] = [
    new Food(100, 'Success fries', 'It works so far have some potatoe!'),
    new Food(1000, 'Success Whopper', 'It is a good day')
  ];
  selectedFood = null;

  addFood(newFoodFromChild: Food) {
    this.masterFoodList.push(newFoodFromChild);
  }

  editFood(clickedFood) {
    this.selectedFood = clickedFood;
  }
}
