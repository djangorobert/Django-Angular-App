import { Component, OnInit } from '@angular/core';
import { PopularService } from '../services/popularService';
import { error } from 'util';


@Component({
    selector: 'pop',
    template: `<ul><li *ngFor="let pop of popular"><p>Youtube Channel: {{pop.name}}</p><p>Subscriptions: {{pop.subs}}</p></li></ul>`

})

export class PopularComponent implements OnInit {
    popular: any[]
    error: any;

    constructor(private popularService: PopularService) {}

    getPopular() {
        this.popularService
            .getPopular()
            .then(popular => this.popular = popular)
            .catch(error => this.error = error);
    }

    ngOnInit() {
        this.getPopular();

    }
    
}