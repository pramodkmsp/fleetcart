import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CountiesService {
  constructor(private httpClient: HttpClient) {}

  getCountry() {
    return this.httpClient.get('../assets/country.json');
  }

  getState() {
    return this.httpClient.get('../assets/state.json');
  }
}
