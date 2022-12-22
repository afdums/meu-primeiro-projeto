import { Component } from '@angular/core';

@Component({
  selector: 'app-data-biding',
  templateUrl: './data-biding.component.html',
  styleUrls: ['./data-biding.component.css']
})
export class DataBidingComponent {

  public nome:string = "Anderson";
  public idade:number = 36;

  public disableButton:boolean = true;

  public position: {x: number, y:number} = {x: 0, y: 0};

  public imgSrc:string="https://www.google.com.br/logos/doodles/2022/seasonal-holidays-2022-6753651837109831.4-law.gif";

  public imgTitle:string="Imagem do Google";

  constructor() {

  }

  public alertInfo(valor:string){
    alert(valor);
  }

  public alertInfoEvent(valor:MouseEvent){
    console.log(valor);
  }

  public moveMouse(evento:MouseEvent){
    console.log(evento);
    this.position.x = evento.offsetX;
    this.position.y = evento.offsetY;

  }

}
