import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo8',
  templateUrl: './demo8.component.html',
  styleUrls: ['./demo8.component.scss']
})
export class Demo8Component implements OnInit {
  prenom : string = "Manuel";
  leSalut : string = "En attente d'un bonjour de l'enfant";
  constructor() { }

  ngOnInit(): void {
  }

  afficherSalut(txt : string){
    this.leSalut = txt;
  }
}
