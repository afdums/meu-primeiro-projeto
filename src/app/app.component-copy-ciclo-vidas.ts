import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
      <!--<app-title *ngIf="!destroy"></app-title>
      <br>
      <button (click)="destroyComponent()">Invoke Destroy</button>
      <br>
      <app-title title="Olá Mundo"></app-title>
      {{valor}}
      <button (click)="adicionar()">Adicionar</button>
      <router-outlet></router-outlet>-->
    `,
})
export class AppComponent implements OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked{

  public valor:number = 1;

  public destroy:boolean = false;
  
  constructor(){

  }

  public adicionar(): number {
    return this.valor += 1;
  }

  ngOnInit(): void {
    
  }

  ngDoCheck(): void {
    console.log("ngDoCheck");
  }

  ngAfterViewInit(): void {
    console.log("ngAfterViewInit"); 
  }
  
  ngAfterContentInit(): void {
    console.log("ngAfterContentInit");     
  }

  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked"); 
  }

  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked"); 
  }
  
  public destroyComponent(){
    this.destroy = !this.destroy;
    console.log('destroy: ' + this.destroy);
  }
  
  
  
}
