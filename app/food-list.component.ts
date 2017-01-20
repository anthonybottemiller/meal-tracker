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
    <div class="food-item" (click)="editClicked(currentFood)" *ngFor="let currentFood of childFoodList | calories:filterByCalories">
      <ul>
        <li>
        <b>"{{currentFood.name}}"</b>
          <ul>
            <li>Calories: {{currentFood.calories}}</li>
            <li>Detail: {{currentFood.details}}</li>
          </ul>
        </li>
      </ul>
    </div>
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