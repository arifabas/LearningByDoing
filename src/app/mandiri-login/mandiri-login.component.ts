import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

@Component({
  selector: 'app-mandiri-login',
  templateUrl: './mandiri-login.component.html',
  styleUrls: ['./mandiri-login.component.scss']
})
export class MandiriLoginComponent implements OnInit {

  angForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      UserName: ['', Validators.required ],
      Password: ['', Validators.required ]
    });
  }

  ngOnInit() {
  }

}
