import { Pipe, PipeTransform } from '@angular/core';
import { Food } from './food.model';

@Pipe({
  name: "calories",
  pure: false
})

export class CaloriesPipe implements PipeTransform {

  transform(input: Food[], calorieOption) {
    var output: Food[] = [];
    if (calorieOption === "highCalorie") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].calories >= 500) {
          output.push(input[i]);
        }
      }
      return output;
    }
    else if (calorieOption === "lowCalorie") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].calories < 500) {
          output.push(input[i]);
        }
      }
      return output;
    }
    else {
      return input;
    }
  }
}