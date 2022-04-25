import { Component } from '@angular/core';
import { singleSpaPropsSubject } from 'src/single-spa/single-spa-props';
import { MatSliderModule } from '@angular/material/slider';


@Component({
  selector: 'app-home',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})



export class AppComponent {
  title = 'app-home'; 
  singleSpaProps$ = singleSpaPropsSubject.asObservable();
}