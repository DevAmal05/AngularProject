import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

 displayUpdate: boolean = false;
  userUpdate : User=new User();
  id:any
  errorMessage:string ='';
  errorMessage1:string =''; 
  Cin:string 
  firstname:string
  lastname:string
  phone:string
  userforupdate: AngularFireList<any>
  data = {
    Cin: '',
    firstname : '' ,

    lastname :  '' ,
    phone :  ''  
   } 
    id1: any;

userfordelete : AngularFireList<any>; 
listuser = [];
formGroup: FormGroup;
displayAdd: boolean = false;

addUserForm: FormGroup;


userList: AngularFireList<any>

  constructor(private router:Router, public dialog: MatDialog,
    private firebase: AngularFireDatabase,  private userService: UserService,
    private route: ActivatedRoute , 
      private db:AngularFireDatabase ,private fire:AngularFireAuth) {
      this.userList = db.list('users');

      this.userfordelete = this.firebase.list('users');
      this.route.params.subscribe( params => {
        this.id = params
      });
      this.userforupdate = this.firebase.list('users');
      this.id1 = this.route.snapshot.paramMap.get('id');
      console.log(this.id1)
    }


  ngOnInit(): void {
    this.userService.getUsers().subscribe((results) => {
      
      this.listUser(results)
   
    })
    
  
  }

  onSubmit() {
 
    let create = 'false';
    
            this.userList.push({
          
            Cin: this.Cin ,
            firstname: this.firstname ,
            lastname: this.lastname ,
            phone: this.phone,
          
              }).then(added =>{
                this.router.navigate(['/people-list'])
              
             
        
    }).catch(error=>{
      console.error(error)
      this.errorMessage1= error.messaage
      console.log('error', error)
      console.log(error.message)
    })
    
  
  }

  listUser(entries){
    this.listuser = [];
    entries.forEach(element => {
     let y = element.payload.toJSON()
     y["$key"] = element.key
     this.listuser.push(y as User);
  })
  console.log(this.listuser);
  }

  openDialog(key): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '350px',
      data: "voulez-vous vraiment supprimer ces données?"
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result) {
      
        this.userfordelete.remove(key);
      
     
      }
    });   
  } 
  





  
  edit(key){
    
    this.router.navigate(['update-user/'+key])
  
  }


}
