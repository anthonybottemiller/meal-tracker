import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'edit-food',
  template: `
    <div>
        <div *ngIf="childSelectedFood">
          <h3>Edit "{{childSelectedFood.name}}"</h3>
          <div class="form-group">
            <label>Edit name:</label>
            <input [(ngModel)]="childSelectedFood.name">
          </div>
          <div class="form-group">
            <label>Edit calories:</label>
            <input type=number [(ngModel)]="childSelectedFood.calories">
          </div>
          <div class="form-group">
            <label>Edit details</label>
            <input [(ngModel)]="childSelectedFood.details">
          </div>
          <button class="btn btn-success" (click)="doneButtonClicked()">Done</button>
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