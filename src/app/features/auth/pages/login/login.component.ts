import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignIn } from '@core/actions';
import { Dispatch } from '@ngxs-labs/dispatch-decorator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  submited: boolean = false;

  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit(): void {
    this.submited = true;
    this.signIn(this.form.controls.email.value, this.form.controls.password.value);
  }

  @Dispatch()
  signIn(username: string, password: string) {
    return new SignIn({ username: username, password: password });
  }
}
