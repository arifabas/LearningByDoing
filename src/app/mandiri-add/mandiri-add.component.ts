import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

@Component({
  selector: 'app-mandiri-add',
  templateUrl: './mandiri-add.component.html',
  styleUrls: ['./mandiri-add.component.scss']
})
export class MandiriAddComponent implements OnInit {

  angForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      UserName: ['', Validators.required ],
      FirstName: ['', Validators.required ],
      LastName: ['', Validators.required ],
      Email: ['', Validators.required ],
      Birthdate: ['', Validators.required ],
      BasicSalary: ['', Validators.required ],
      Status: ['', Validators.required ],
      Group: ['', Validators.required ],
      Description: ['', Validators.required ]
    });
  }

  ngOnInit() {
  }

}
