import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  navLink : Link[] = [];
  navLinkExer : Link[] = [];
  isVisible : boolean = false;
  isVisible1 : boolean = false;
  constructor() { }

  ngOnInit(): void {
    this.navLink = [
      {title : "Demo", url : "/demo", children : [
        {title : "Demo 1 - One Way Binding", url : "demo/demo1"}, 
        {title : "Demo 2 - Two Way Binding", url : "demo/demo2"},
        {title : "Demo 3 - Event Binding", url : "demo/demo3"},
        {title : "Demo 4 - Attribute Binding", url : "demo/demo4"},
        {title : "Demo 5 - Pipes", url : "demo/demo5"},
        {title : "Demo 6 - Directives", url : "demo/demo6"},
        {title : "Demo 7 - Structurals Directives", url : "demo/demo7"},
        {title : "Demo 8 - Input & Output", url : "demo/demo8"},
      ]},
      {title : " Exercices", url : "/exercices", children : [
        {title : "Ex01 - Chrono", url : "exercices/ex01"},
        {title : "Ex02 - Ajout Liste", url : "exercices/ex02"},
      ]}
    ];
    // this.navLink = [
    //   {title : " demo - 1", url : "demo/demo1"}, 
    //   {title : " demo - 2", url : "demo/demo2"},
    //   {title : " demo - 3", url : "demo/demo3"},
    //   {title : " demo - 4", url : "demo/demo4"},
    //   {title : " demo - 5", url : "demo/demo5"},
    //   {title : " demo - 6", url : "demo/demo6"},
    //   {title : " demo - 7", url : "demo/demo7"},
    //   {title : " demo - 8", url : "demo/demo8"},
    // ];
    // this.navLinkExer = [
    //   {title : " ex01", url : "exercices/ex01"}, 
    // ];
  }
  toggle(){
    this.isVisible = !this.isVisible;
  }
  toggle1(){
    this.isVisible1 = !this.isVisible1;
  }
}

export class Link{
  public title : string = "";
  public url? : string;
  public children? : Link[];
  public isVisible? : boolean;

}
