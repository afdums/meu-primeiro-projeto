import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent {

  @Output() public enviarDados = new EventEmitter();

  public list:Array<{nome:string,idade:number}> = [
    {nome: "Anderson", idade: 36},
    {nome: "Camila", idade: 33},
    {nome: "Joaquim", idade: 1},
  ]

  public getDados(i:number){
    this.enviarDados.emit(this.list[i]);
  }

}
