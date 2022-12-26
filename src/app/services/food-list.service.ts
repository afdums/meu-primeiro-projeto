import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Food } from '../module/food';

@Injectable({
  providedIn: 'root'
})
export class FoodListService {

  public emitEvent = new EventEmitter();

  private url:string = "http://localhost:3000/";

  /*public foodListAlert(value: string){
    return this.emitEvent.emit(value);
  }*/

  private list: Array<string> = [
    /*"X Bacon",
    "Feijão",
    "Ovo",*/
  ]

  constructor(private http: HttpClient) { }

  public getFoodList():Observable<Array<Food>>{
    return this.http.get<Array<Food>>(`${this.url}foods`).pipe(
      res => res,
      error => error
    )
  }  

  /*public getFoodList(){
    return this.list;
  }*/

  /*public postFoodList(value: string){
    this.foodListAlert(value);
    return this.list.push(value);
  }*/

  public postFoodList(value: string): Observable<Food>{
    return this.http.post<Food>(`${this.url}foods`, {name: value}).pipe(
      res => res,
      error => error
    )
  }

  public putFoodList(id: number, value: string): Observable<Food>{
    return this.http.put<Food>(`${this.url}foods/${id}`, {name: value}).pipe(
      res => res,
      error => error
    )
  }

  public deleteFoodList(id: number): Observable<Food>{
    return this.http.delete<Food>(`${this.url}foods/${id}`).pipe(
      res => res,
      error => error
    )
  }

  public foodListAlert(value: Food){
    return this.emitEvent.emit(value);
  }

}
