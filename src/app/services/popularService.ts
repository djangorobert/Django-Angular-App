import { Component, OnInit, Injectable } from '@angular/core';
import { Http } from '@angular/http';


import 'rxjs/add/operator/toPromise';

@Injectable()
export class PopularService {
        private apiURL = 'http://127.0.0.1:8000/popular/';

    constructor(private http: Http) {}

    getPopular() {
        return this.http.get(this.apiURL)
        .toPromise()
        .then(response => response.json())
        .catch(this.handleError);
        
    }

    private handleError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
      
    }
}