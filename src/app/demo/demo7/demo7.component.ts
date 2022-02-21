import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo7',
  templateUrl: './demo7.component.html',
  styleUrls: ['./demo7.component.scss']
})
export class Demo7Component implements OnInit {

  isVisible : boolean = false;
  listeCourse : string[] = [];
  maVariable : string = "";
  constructor() { }

  ngOnInit(): void {
    this.listeCourse = ["Banane", "Lait", "Pommes", "Kiwi", "Ail"];
  }

  toggle(){
    this.isVisible = !this.isVisible;
  }
}
