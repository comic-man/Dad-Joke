import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DadServiceService {
  constructor(private http: HttpClient) {}

  getJoke() {
    return this.http
      .get<string>('https://icanhazdadjoke.com/', {
        headers: new HttpHeaders().set('Accept', 'application/json'),
      })

  }
}
