
import { Component } from '@angular/core';
import {IUser} from '../model/Iuser';
import { UserComponent } from './user/user';


@Component({
  selector: 'app-root',
  imports: [UserComponent],
  standalone : true,
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class AppComponent {

  count : number = 0; 
  message : string = '';
  
  userList : IUser[]= [
    {
    name : 'Alice',
    email : 'alice@email.com' , 
    IsActive : false
  },
  {
    name : 'Tom',
    email : 'tom@email.com' , 
    IsActive : true
  },{
    name : 'Charles',
    email : 'ch@email.com' , 
    IsActive : true
  },
  {
    name : 'Jane',
    email : 'jane@email.com' , 
    IsActive : false
  }
]; 

  selectedUser : IUser = this.userList[0];

  onClick(){
     this.count++;
    this.selectedUser = this.userList[this.count % this.userList.length];
    
}

}