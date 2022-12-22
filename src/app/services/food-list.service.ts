import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodListService {

  private list: Array<string> = [
    "X Bacon",
    "Feijão",
    "Ovo",
  ]

  constructor() { }

  public getFoodList(){
    return this.list;
  }

  public postFoodList(value: string){
    return this.list.push(value);
  }

}
