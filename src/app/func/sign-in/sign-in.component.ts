import { Component, OnInit } from '@angular/core';
import { signInFrame } from 'src/environments/environment';
import './sign-in.translations';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  signInFrame = signInFrame;

  constructor() { }

  ngOnInit(): void {
  }

}

