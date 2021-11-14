import { ToastrService } from 'ngx-toastr';
import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,FormBuilder,Validators } from '@angular/forms';
import { User } from '../user';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
myForm:FormGroup

  title="hello world";
  name="Geoupe2 Octobre";
 imageURL="https://i.pinimg.com/originals/4e/af/a6/4eafa626e4854651ee1afd4a446c782a.jpg";
 dates=new Date();
 names=['Ali','Ahmed','Eya','Imen','Asma'];
 peopleList=[
   {id:1,firstname:"Ahmed"},
   {id:2,firstname:"Ali"},
 ]
  constructor(private fb:FormBuilder,private toastr: ToastrService) { 
    let formControls={
      firstname:new FormControl('',[
        Validators.required,
        Validators.pattern("[A-Za-z]+"),
        Validators.minLength(3)
      ]),
      lastname:new FormControl('',[
        Validators.required,
        Validators.pattern("[A-Za-z]+"),
        Validators.minLength(3)
      ]),
      phone:new FormControl('',[
        Validators.required,
        Validators.pattern("[0-9]+")
      ]),
      email:new FormControl('',[
        Validators.required,
        Validators.email
      ])

    }
    this.myForm=this.fb.group(formControls)
  
  }
  get firstname(){
    return this.myForm.get('firstname')
  }
  get lastname(){
    return this.myForm.get('lastname')
  }
  get phone(){
    return this.myForm.get('phone')
  }
  get email(){
    return this.myForm.get('email')
  }

  ngOnInit(): void {
  }
  save() {
   let data=this.myForm.value;
   let user=new User(data.firstname,data.lastname,null,data.phone,data.email);
   console.log(user);
   this.toastr.success('Welcome!', 'User added successfully!');
  }

}
