import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  public signupForm: any | FormGroup;

  constructor(private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group{{
      firstName: [''],
      lastName: [''],
      email: [''],
      password:['']



    }}
  }

}
