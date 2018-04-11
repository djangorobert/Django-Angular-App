import { Component } from '@angular/core';
import { PopularComponent } from './Popular/popular'
import { PopularService } from './services/popularService'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PopularService]
})
export class AppComponent {
  title = 'app';
}
