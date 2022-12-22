import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
      <ng-template [ngIf]="pessoa">
        <h1>{{pessoa.nome}} - {{pessoa.idade}} anos</h1>
      </ng-template>
      <app-output (enviarDados)="setDados($event)"></app-output>
      <router-outlet></router-outlet>      
    `,
})
export class AppComponent implements OnInit{

  public addValue:number = 7;

  public pessoa: {nome: string, idade: number} | undefined;
  
  constructor(){

  }

  ngOnInit(): void {
    
  }
  
  public add(){
    this.addValue++;
  }

  public setDados(event: any){
    this.pessoa = event;
    console.log(this.pessoa);
  }
  
}

