import { Component, OnInit } from '@angular/core';
import { ListeService } from 'src/app/services/liste.service';

@Component({
  selector: 'app-ex02',
  templateUrl: './ex02.component.html',
  styleUrls: ['./ex02.component.scss']
})

export class Ex02Component implements OnInit {
  item : string = "";
  list : Article[] = [];
  constructor(private _listService : ListeService) { }
  ngOnInit(): void {
    this.list = this._listService.maList;
  }
  ajoutList(txt : string){
    this.item = txt;
  }
  ajouter(){
    let art : Article = new Article(this.item, 1);
    this._listService.addListItem(art);
  }
  supprimer(i : number){
    this._listService.removeListItem(i);
  }
  addQuantity(i:number){
    this._listService.addQuantity(i); // function from service
  }
  removeQuantity(i:number){
    this._listService.removeQuantity(i);
  }
}

export class Article{
  nom : string;
  quantite : number;
  constructor(nom : string, quantite : number){
    this.nom = nom;
    this.quantite = quantite;
  }
}