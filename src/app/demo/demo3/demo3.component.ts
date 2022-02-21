import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo3',
  templateUrl: './demo3.component.html',
  styleUrls: ['./demo3.component.scss']
})
export class Demo3Component implements OnInit {

  maVariable : string = "Bonjour tout le monde";
  constructor() { }

  ngOnInit(): void {
  }

  changerLangue() : void {
    this.maVariable = "Hello everybody";
  }

}
