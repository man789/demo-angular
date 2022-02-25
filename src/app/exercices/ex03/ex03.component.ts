import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { formatDate } from '@angular/common';


@Component({
  selector: 'app-ex03',
  templateUrl: './ex03.component.html',
  styleUrls: ['./ex03.component.scss']
})

export class Ex03Component implements OnInit {

  listePersonne : Personne[] = [];
  monForm : FormGroup;
  addressForm : FormGroup;
  constructor(private _formBuild : FormBuilder) { 
    this.monForm = this._formBuild.group(
      {
        nis : [null, [Validators.required]],
        nom : [null, [Validators.required, Validators.maxLength(20)]],
        prenom : [null, [Validators.required, Validators.maxLength(20)]],
        genre : [null, [Validators.required]],
        dateNaissance : [null, [Validators.required]],
        iban : [null, [Validators.required]],
        address : [false],
      }
    );
    this.addressForm = this._formBuild.group(
      {
        rue : [null, [Validators.required]],
        numero : [null, [Validators.required]],
        postal : [null, [Validators.required]],
        ville : [null, [Validators.required]],
      }
    )
  }

  ngOnInit(): void {
  }

  envoiDemande(){
    if(this.monForm.valid){
      let formulaireComplet : Personne;
      if(this.monForm.value['address']){
        formulaireComplet = new Personne(
          this.monForm.value['nis'],
          this.monForm.value['nom'],
          this.monForm.value['prenom'],
          this.monForm.value['genre'],
          this.monForm.value['dateNaissance'],
          this.monForm.value['iban'],
          new address(
            this.addressForm.value['rue'],
            this.addressForm.value['numero'],
            this.addressForm.value['postal'],
            this.addressForm.value['ville']
          ) 
          
        );
      }else{
          formulaireComplet = new Personne(
          this.monForm.value['nis'],
          this.monForm.value['nom'],
          this.monForm.value['prenom'],
          this.monForm.value['genre'],
          this.monForm.value['dateNaissance'],
          this.monForm.value['iban']
        )
      }
      this.listePersonne.push(formulaireComplet);
      this.monForm.reset()
    }
  }
}

export class Personne{
  nis : string;
  nom : string;
  prenom : string;
  genre : string;
  dateNaissance : Date;
  iban : string;
  address? : address;
  constructor(nis : string, nom : string, prenom :string, genre : string, dateNaissance : Date, iban : string , address? : address){
    this.nis = nis;
    this.nom = nom;
    this.prenom = prenom;
    this.genre = genre;
    this.dateNaissance = dateNaissance;
    this.iban = iban;
    this.address = address? address : undefined;
  }
}
export class address{
  rue : string;
  numero : string;
  postal : string;
  ville : string;
  constructor(rue : string, numero: string, postal : string,ville : string){
    this.rue = rue;
    this.numero = numero;
    this.postal = postal;
    this.ville = ville;
  }
}