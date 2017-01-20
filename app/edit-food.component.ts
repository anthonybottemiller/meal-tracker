import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'edit-food',
  template: `
    <div>
        <div *ngIf="childSelectedFood">
          <h3>{{childSelectedFood.name}}</h3>
          <hr>
          <h3>Edit Task</h3>
          <label>Edit name:</label>
          <input [(ngModel)]="childSelectedFood.name">
          <label>Edit calories:</label>
          <input [(ngModel)]="childSelectedFood.calories">
          <label>Edit details</label>
          <input [(ngModel)]="childSelectedFood.details">
          <button (click)="doneButtonClicked()">Done</button>
        </div>
      </div>
  `
})

export class EditFoodComponent {
  @Input() childSelectedFood: Food;
  @Output() doneButtonClickedSender = new EventEmitter();

  doneButtonClicked() {
    this.doneButtonClickedSender.emit();
  }

}