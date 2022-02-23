import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FakeLoginServService {

  isConnected : boolean = false;
  constructor() { }

  connect(login : string, mdp : string) : boolean{
    // Requete vers la DB, avec les infos utilisateurs
    if(login === "manu" && mdp === "1234"){
      this.isConnected = true;
    }
    return this.isConnected;
  }

  disconnect() : boolean{
    this.isConnected = false;
    return this.isConnected;
  }

  // getAll() :  Product[]{
  //   // requete vers api qui ernvoi les produits
  //   // creation liste de produits avec json
  //   // renvoi la liste de produit
  //   return listeroduits;
  // }
  //getById
  //getByCategory

  //insert
  //update
}
