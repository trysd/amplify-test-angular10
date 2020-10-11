import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { APIService } from './API.service';
import { Restaurant } from '../types/restaurant';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'amplify-angular-app';

  // geolocation test
  public coords;

  public createForm: FormGroup;

  /* declare restaurants variable */
  restaurants: Array<Restaurant>;

  constructor(
    private ampApi: APIService,
    private fb: FormBuilder
    ) { }

  async ngOnInit(): Promise<void> {

    // geolocation test
    this.mytest();

    this.createForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      city: ['', Validators.required]
    });
    this.ampApi.ListRestaurants().then(event => {
      this.restaurants = event.items;
    });

    /* subscribe to new restaurants being created */
    this.ampApi.OnCreateRestaurantListener.subscribe( (event: any) => {
      const newRestaurant = event.value.data.onCreateRestaurant;
      this.restaurants = [newRestaurant, ...this.restaurants];
    });
  }

  public onCreate(restaurant: Restaurant): void {
    this.ampApi.CreateRestaurant(restaurant).then(event => {
      console.log('item created!');
      this.createForm.reset();
    })
    .catch(e => {
      console.log('error creating restaurant...', e);
    });
  }

  private mytest(): void {
    // geolocation test
    navigator.geolocation.watchPosition(
      loc => {
        this.coords = [ loc.coords.latitude, loc.coords.longitude ];
      },
      err => this.coords = 'fail geolocation',
    );
  }
}
