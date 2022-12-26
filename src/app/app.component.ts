import { Component, OnInit } from '@angular/core';
import { FoodListService } from './services/food-list.service';

@Component({
  selector: 'app-root',
  template: `
      <!--<ng-template [ngIf]="pessoa">
        <h1>{{pessoa.nome}} - {{pessoa.idade}} anos</h1>
      </ng-template>
      <app-output (enviarDados)="setDados($event)"></app-output>-->
      <app-food-add></app-food-add>
      <app-food-list></app-food-list>
      <router-outlet></router-outlet>      
    `,
})
export class AppComponent implements OnInit{

  public addValue:number = 7;

  public pessoa: {nome: string, idade: number} | undefined;
  
  constructor(private foodListService:FoodListService){

  }

  ngOnInit(): void {

    /*this.foodListService.emitEvent.subscribe(
      res => alert(`No app.component => ${res}`)
    );*/
    
  }
  
  public add(){
    this.addValue++;
  }

  public setDados(event: any){
    this.pessoa = event;
    console.log(this.pessoa);
  }

  
  
}

