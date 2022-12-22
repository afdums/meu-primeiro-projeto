import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-estruturais',
  templateUrl: './diretivas-estruturais.component.html',
  styleUrls: ['./diretivas-estruturais.component.css']
})
export class DiretivasEstruturaisComponent implements OnInit {
  public condition:boolean = true;
  public conditionClick: boolean = true;

  public list:Array<{nome: string, idade: number}> = [
    {nome: "Dums", idade: 30},
    {nome: "Anderson", idade: 36},
    {nome: "Fabiano", idade: 50}
  ]

  public nome:string = "";

  constructor() {
    this.list.push(
      {nome: "Joaquim", idade: 1},
      {nome: "Camila", idade: 33});
  }

  ngOnInit(): void {
    setInterval(() => {
        this.condition = !this.condition;
      }, 2000);
  }

  public onClick(){
    this.conditionClick = !this.conditionClick;
  }

  public onClickAddList(){
    this.list.push({nome: "Joao", idade: 30});
  }

  public onClickDelList(i: number){
    console.log(i);
    this.list.splice(i,1);
  }

}
