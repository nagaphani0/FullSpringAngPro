import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserI} from '../../models';
import {Observable} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class UsersService implements OnInit{
  usersUrl:string="http://localhost:8081/users"

  constructor(private http: HttpClient) {}

  ngOnInit() {
    // this.allUsers()
  }
  allUsers():Observable<any> {
   return  this.http.get<any[]>(this.usersUrl)
  }
  createUser(data:any):Observable<any> {
   return this.http.post(this.usersUrl,data)
  }
  saveChanges(selectedUser:any):Observable<any>{
   return  this.http.put(this.usersUrl,selectedUser)
  }
  Delete(id: any) {
    console.log('Delete called for product ID:', id);
    return  this.http.delete<void>(`${this.usersUrl}/${id}`)
  }
}
