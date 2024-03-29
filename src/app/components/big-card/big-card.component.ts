import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {

  @Input()
  photoCover:string = ""
  @Input()
  cardTitle:string = "NOVO HOMEM DE FERRO ANUNCIADO"
  @Input()
  cardDescription:string = "A Marvel Studios anuncia novo filme do Homem de Ferro!"
  @Input()
  Id:string="0"

  constructor() { }

  ngOnInit(): void {
  }

}
