import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IUser } from '../../model/Iuser';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class UserComponent {

  @Input() user!: IUser ; 
  @Output() newEvent = new EventEmitter<{name : string , email : string}> ();

  onSelectedUser(){
    console.log(this.user.name);
    this.newEvent.emit({name : this.user.name, email : this.user.email});
  }
}
