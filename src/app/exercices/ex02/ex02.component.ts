import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex02',
  templateUrl: './ex02.component.html',
  styleUrls: ['./ex02.component.scss']
})
export class Ex02Component implements OnInit {
  item : string = "";
  list : string[] = [];
  constructor() { }

  ngOnInit(): void {
  }
  ajoutList(txt : string){
    this.item = txt;
  }
  ajouter(){
    this.list.push(this.item);
  }
  supprimer(i:number){
    this.list.splice(i,1);
  }
}
