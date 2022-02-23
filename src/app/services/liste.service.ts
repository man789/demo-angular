import { Injectable } from '@angular/core';
import { Article } from '../exercices/ex02/ex02.component';

@Injectable({
  providedIn: 'root'
})

export class ListeService {
  maList : Article[] = [{nom : "jeans" , quantite : 2}, {nom : "Pull" , quantite : 4}];
  constructor() { 
  }
  addListItem(article : Article){
    if(article.nom != ""){
      this.maList.push(article);
    }else{
      alert("enter un produit correct");
    }
  }
  removeListItem(i : number){
    this.maList.splice(i,1);
  }
  addQuantity(i:number){
    this.maList[i].quantite++;
  }
  removeQuantity(i:number){
    if(this.maList[i].quantite > 1){
      this.maList[i].quantite--;
    }else{
      this.removeListItem(i);
    }
  }
}
