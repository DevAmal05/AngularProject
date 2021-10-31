import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  title="hello world";
  name="Geoupe2 Octobre";
 imageURL="https://i.pinimg.com/originals/4e/af/a6/4eafa626e4854651ee1afd4a446c782a.jpg";
 dates=new Date();
 names=['Ali','Ahmed','Eya','Imen','Asma'];
 peopleList=[
   {id:1,firstname:"Ahmed"},
   {id:2,firstname:"Ali"},
 ]
  constructor() { 
  
  }

  ngOnInit(): void {
  }

}
