import { Component } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private http: HttpClient) {

  }
  title = 'google-test';
  zipCode: string = '';
  googleGeocodeApiKey: 'AIzaSyDLD7PnB1WrJ_GFHZfq3y1swme08Ig8IAg';
  googleData: any = null;

  submit() {
    this.googleData = null;
    const searchParams = new HttpParams()
    .set('components', 'country:US|postal_code:' + this.zipCode.toString())
    .set('language', 'en')
    .set('key', 'AIzaSyDLD7PnB1WrJ_GFHZfq3y1swme08Ig8IAg');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Access-Control-Allow-Origin': '*',
      //   'data-type': 'json',
      //   'Access-Control-Allow-Origin': '*',
      //   'Access-Control-Allow-Credentials': 'true',
      //   'Access-Control-Allow-Methods': 'GET,HEAD,OPTIONS,POST,PUT',
      //   'Access-Control-Allow-Headers': 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Authorization',
      }),
      params: searchParams
    };
    this.http.get('https://maps.googleapis.com/maps/api/geocode/json', httpOptions)
      .subscribe(response => {
        this.googleData = response;
      })
  }

}
