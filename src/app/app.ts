import { Component } from '@angular/core';
import { UserComponent } from './user-component/user-component';

@Component({
  selector: 'app-root',
  imports: [UserComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class AppComponent {

  
  count : number = 0 ;
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
    this.count ++;
    if(this.count < this.userList.length ){
      this.selectedUser = this.userList[this.count];
    }
   
  }
}
