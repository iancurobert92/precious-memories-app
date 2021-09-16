import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SignUp } from '@core/actions';
import { Dispatch } from '@ngxs-labs/dispatch-decorator';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  form!: FormGroup;
  submited: boolean = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit(): void {
    this.submited = true;
    this.signUp(this.form.controls.email.value, this.form.controls.password.value);
  }

  @Dispatch()
  signUp(username: string, password: string) {
    return new SignUp({ username: username, password: password });
  }
}
