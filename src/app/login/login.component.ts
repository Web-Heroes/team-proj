import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });
  constructor(private router: Router) {}

  ngOnInit(): void {}
  onSubmit() {
    console.log('form values', this.loginForm.value);
    localStorage.setItem('isAuthenticated', 'true');
    localStorage.setItem('userEmail', this.loginForm.value.email)
    this.router.navigate(['/home']);
  }
}
