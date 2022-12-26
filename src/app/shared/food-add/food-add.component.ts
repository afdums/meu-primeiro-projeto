import { Component } from '@angular/core';
import { FoodListService } from 'src/app/services/food-list.service';

@Component({
  selector: 'app-food-add',
  templateUrl: './food-add.component.html',
  styleUrls: ['./food-add.component.css']
})
export class FoodAddComponent {

  constructor(private foodListService: FoodListService){
    
  }

  public addFood(value: string){
    return this.foodListService.postFoodList(value).subscribe({
      next: (res) => {this.foodListService.foodListAlert(res)},
      error: (error) => error
    });
  }

}
