import { Component, OnInit } from '@angular/core';
import { Food } from 'src/app/module/food';
import { FoodListService } from 'src/app/services/food-list.service';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {

  public foodList: Array<Food> = [];

  constructor(private foodListService: FoodListService){
    
  }

  ngOnInit(): void {
    this.foodListService.getFoodList().subscribe({
      next: (res) => this.foodList = res,
      error: (err) => err
    });

    this.foodListService.emitEvent.subscribe(
      res => {
        alert(`Você add => ${res.name}`);
        return this.foodList.push(res);
      }
    );

  }

  public delFood(id: number){
    this.foodListService.deleteFoodList(id).subscribe({
      next: (res) => {
        this.foodList = this.foodList.filter(
          item => {
            return id !== item.id;
          }
        )
      },
      error: (error) => console.log(error)

    })
  }

  public editFoodList(food: Food){
    this.foodListService.putFoodList(food.id, food.name).subscribe({
      next: (res) => {return console.log(res)},
      error: (error) => {return console.log(error)},
    })
  }

}
