import { Component } from '@angular/core';
import {UsersService} from '../../service/users/users.service';
import {UserI} from '../../models';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
@Component({
  selector: 'app-users',
  imports: [FormsModule,CommonModule],
  templateUrl: './users.html',
  styleUrl: './users.css'
})
export class Users {
  data:UserI[]=[]
  showUpdate:boolean=false
  showCreate:boolean=false

  selectedUser:UserI={
    "id": 0,
    "name": "",
    "mobileNo": "",
    "password": ""
  }

  constructor(private service:UsersService) {
  this.getUsers()
  }
  getUsers(){
    this.service.allUsers().subscribe(
      data=>{
        this.data=data
        console.log(this.data)
      }
    )
  }
  CreateUser(){
    this.showCreate=true

  }
  createUser(){
    console.log("create User called",this.selectedUser);

    this.service.createUser(this.selectedUser)
      .subscribe(response => {
        console.log('User created successfully:', response);
      }, error => {
        console.error('Error creating User:', error);
      });
  }
  Update(data:any){
    this.showUpdate=true
    this.selectedUser=data
    console.log(this.showUpdate,'given to update this',this.selectedUser)
  }

  saveChanges(){
    console.log('saving this changed data',this.selectedUser);

    this.service.saveChanges(this.selectedUser).subscribe(
      response => {
        console.log('Users updated successfully:', response);
        this.getUsers()
      },
      error => {
        console.error('Error updating User:', error);
      }
    )
  }

  Delete(id:number) {
    this.service.Delete(id).subscribe({
      next: () => {
        console.log('Users deleted successfully');
        this.getUsers();
      },
      error: (err) => {
        console.error('Error deleting Users:', err);
      }
    });
  }
}
