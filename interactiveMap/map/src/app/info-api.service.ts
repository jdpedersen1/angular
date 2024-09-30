import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InfoApiService {

  constructor(private http: HttpClient) { }

  fetchCountryInfo(country: string) {
    let api = `https://api.worldbank.org/v2/country/${country}?format=json`;

    return this.http.get(api);
  }

  setCountryInfo(country: string) {
    let subject = new Subject();

    this.fetchCountryInfo(country).subscribe((data: any) => {
      subject.next({
        country: data[1][0].name,
        capital: data[1][0].capitalCity,
        region: data[1][0].region.value,
        income: data[1][0].incomeLevel.value,
        latitude: data[1][0].latitude,
        longitude: data[1][0].longitude
      })
    })

    return subject.asObservable();
  }
}

