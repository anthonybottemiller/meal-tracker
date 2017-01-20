import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'food-list',
  template: `
    <ul>
      <li *ngFor="let currentFood of childFoodList">"{{currentFood.name}}" Calories: {{currentFood.calories}}
      <button (click)="editClicked(currentFood)">Edit!</button>
      </li>
    </ul>
  `
})
export class FoodListComponent {
  @Input() childFoodList: Food[];
  @Output() clickSender = new EventEmitter();

  editClicked(foodToEdit: Food) {
    this.clickSender.emit(foodToEdit);
  }

}