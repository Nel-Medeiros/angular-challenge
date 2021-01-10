import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  public usersData() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
}
