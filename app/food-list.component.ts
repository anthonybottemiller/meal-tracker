import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'food-list',
  template: `
    <label>What calorie range do you wish to view?</label>
    <select (change)="onFilterChange($event.target.value)">
      <option value="all">All Items</option>
      <option value="highCalorie">High Calories</option>
      <option value="lowCalorie">Low Calories</option>
    </select>
    <ul>
      <li *ngFor="let currentFood of childFoodList | calories:filterByCalories">"{{currentFood.name}}" Calories: {{currentFood.calories}}
      <button (click)="editClicked(currentFood)">Edit!</button>
      </li>
    </ul>
  `
})
export class FoodListComponent {
  @Input() childFoodList: Food[];
  @Output() clickSender = new EventEmitter();

  filterByCalories: string = "all";

  editClicked(foodToEdit: Food) {
    this.clickSender.emit(foodToEdit);
  }

  onFilterChange(optionFromSelect) {
    this.filterByCalories = optionFromSelect;
  }

}