import { Component } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserServiceService } from '../service/user-service.service';
import { AuthService } from '../service/auth.service';



import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule],
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  email = '';
  password = '';
  successMessage = '';
  errorMessage = '';
  showPassword = false;
  

  constructor(private userService: UserServiceService, private router: Router,private http: HttpClient, private auth: AuthService) {}

  login() {
  this.userService.login(this.email, this.password).subscribe({
    next: (res) => {
      const user = res.user;

      localStorage.setItem('user', JSON.stringify(user));

      this.auth.setRole(user.role); 

      this.successMessage = 'Login successful!';
      this.errorMessage = '';

      setTimeout(() => {
        this.router.navigate(user.role === 'buyer' ? ['/catalog'] : ['/DashboardS']);
      }, 1500);
    },
    error: (err) => {
      this.errorMessage = err.error.message || 'Login failed';
      this.successMessage = '';
    }
  });
}

  }
 

