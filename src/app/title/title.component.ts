import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit, OnChanges, OnDestroy{

  @Input() public title:string = "Bem vindo";

  constructor() { }
  
  ngOnInit(): void {
    console.log('componente foi criado');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges");
  }

  ngOnDestroy(): void {
    console.log('componente foi descruido');
  }

  

}
