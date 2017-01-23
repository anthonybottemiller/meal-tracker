import { Component, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

 @Component({
  selector: 'new-food',
  template: `
  <div class="new-form"> 
    <h3>New Food</h3>
    <div class="form-group">
      <label>What did you eat?:</label>
      <input #newName required>
    </div>
    <div class="form-group">
      <label>How many calories?</label>
      <input type=number #newCalories required>
    </div>
    <div class="form-group">
      <label>Any other details?</label>
      <input #newDetail required>
    </div>
    <button class="btn btn-primary" (click)="submitForm(newCalories.value, newName.value, newDetail.value); newCalories.value=''; newName.value=''; newDetail.value='';">Add Food</button>
  </div>
  `
})

export class NewFoodComponent {
@Output() newFoodSender = new EventEmitter();

  submitForm(calories: number, name: string, details: string) {
    var newFood: Food = new Food(calories, name, details);
    this.newFoodSender.emit(newFood);
  }
}