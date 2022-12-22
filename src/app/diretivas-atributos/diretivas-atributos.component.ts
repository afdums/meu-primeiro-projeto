import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-atributos',
  templateUrl: './diretivas-atributos.component.html',
  styleUrls: ['./diretivas-atributos.component.css']
})
export class DiretivasAtributosComponent implements OnInit{
  public valor:boolean = true;
  public altura:string = "20px";
  public cor:string = "blue";
  public nome:string = "";

  public list:Array<{nome:string}> = [{nome: "Dums"},{nome: "Fabiano"}];

  public date:Date = new Date();

  ngOnInit(): void {

    setInterval(() => {
      this.valor = !this.valor;
      if(this.altura == "20px"){
        this.altura = "40px";
        this.cor = "red";
      }else{
        this.altura = "20px";
        this.cor = "blue";
      }
    }, 2000);
    
  }

  public addListItem(){
    if(this.nome != "")
      this.list.push({nome: this.nome});
    this.nome = "";
  }

}
