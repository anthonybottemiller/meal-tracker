import { Component, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

 @Component({
  selector: 'new-food',
  template: `
  <h3>New Food</h3>
   <div>
     <label>What did you eat?:</label>
     <input #newName>
   </div>
   <div>
    <label>How many calories?</label>
    <input #newCalories>
   </div>
   <div>
    <label>Any other details?</label>
    <input #newDetail>
   </div>
   <button (click)="submitForm(newCalories.value, newName.value, newDetail.value);">Add</button>
  `
})

export class NewFoodComponent {
@Output() newFoodSender = new EventEmitter();

  submitForm(calories: number, name: string, details: string) {
    var newFood: Food = new Food(calories, name, details);
    this.newFoodSender.emit(newFood);
  }
}