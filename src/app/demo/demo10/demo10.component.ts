import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-demo10',
  templateUrl: './demo10.component.html',
  styleUrls: ['./demo10.component.scss']
})
export class Demo10Component implements OnInit {

  listeDemandes : PermisForm[] = [];

  monForm : FormGroup;
  constructor(private _formBuild : FormBuilder) {
    this.monForm = this._formBuild.group(
      { nom : [null, [Validators.required, Validators.maxLength(20)]],
        prenom : [null, [Validators.required]],
        dateNaissance : [new Date(), [Validators.required]],
        permis : ["", [Validators.required]],
        plaque : [null, [Validators.required, this.PlaqueValide()]]}
    );
  }

  ngOnInit(): void {
  }

  ajouterDemande(){
    if(this.monForm.valid){
      let demandeAAjouter = new PermisForm(
        this.monForm.value['nom'],
        this.monForm.value['prenom'],
        this.monForm.value['dateNaissance'],
        this.monForm.value['permis'],
        this.monForm.value['plaque']
      );
      this.listeDemandes.push(demandeAAjouter);
      this.monForm.reset();
    }
  }
  PlaqueValide() : ValidatorFn | null{
    return (control : AbstractControl) =>{
      let plaque : string = control.value? control.value : "";
      if(plaque.match(/[0-9]-[A-Z]{3}-[0-9]{3}/)){
        return null;
      }else{
        return {'verifPlaque' : true}
      }
    }
    return null;
  }
}

export class PermisForm{
  nom : string;
  prenom : string;
  dateNaissance : Date;
  permis : string;
  plaque : string;

  constructor(nom : string, prenom : string, dateNaissnace : Date, permis : string, plaque : string){
    this.nom = nom;
    this.prenom = prenom;
    this.dateNaissance = dateNaissnace;
    this.permis = permis;
    this.plaque = plaque;
  }
}