import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Article } from '../ex02.component';

@Component({
  selector: 'app-ex02a',
  templateUrl: './ex02a.component.html',
  styleUrls: ['./ex02a.component.scss']
})
export class Ex02aComponent implements OnInit {

  @Input() listAchat : Article[] = [];
  @Output() delete : EventEmitter<number>;
  @Output() add1 : EventEmitter<number>;
  @Output() less1 : EventEmitter<number>;
  item : string = "";

  constructor() {
    this.delete = new EventEmitter<number>();
    this.add1 = new EventEmitter<number>();
    this.less1 = new EventEmitter<number>();
  }

  ngOnInit(): void {
  }

  envoiId(i:number){
    this.delete.emit(i);
  }
  ajoutEl(i : number){
    this.add1.emit(i);
  }
  removeEl(i : number){
    this.less1.emit(i);
  }
}

