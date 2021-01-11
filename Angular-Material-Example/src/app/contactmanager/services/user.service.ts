import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable()
export class UserService {

  private _user: BehaviorSubject<User[]>;
  private dataStore: {
    users: User[]
  }
  constructor(private http: HttpClient) {
    this.dataStore = { users: [] };
    this._user = new BehaviorSubject<User[]>([]);
  }

  get users(): Observable<User[]>{
    return this._user.asObservable();
  }

  loadAll(){
    const usersUrl = 'https://angular-material-api.azurewebsites.net/users';
    return this.http.get<User[]>(usersUrl)
      .subscribe(
        data=> {
          this.dataStore.users = data;
          this._user.next(Object.assign({}, this.dataStore).users)
        },
        error => {
          console.log("Failed to fetch users");
        }
        
      )
  }

  userById(id){
    return this.dataStore.users.find(x=>x.id === id);
  }

}
