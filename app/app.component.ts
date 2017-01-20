import { Component } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'app-root',
  template: `
  <h1>Meal Tracker</h1>
  <food-list [childFoodList]="masterFoodList" (clickSender)="editFood($event)"></food-list>
  <edit-food [childSelectedFood]="selectedFood"></edit-food>
  <new-food (newFoodSender)="addFood($event)"></new-food>
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
