import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  constructor(private http: HttpClient) { }

  public photosData() {
    return this.http.get('https://jsonplaceholder.typicode.com/photos');
  }
}
