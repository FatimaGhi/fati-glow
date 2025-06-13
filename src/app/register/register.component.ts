import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from '../service/user-service.service';
import { User } from '../models/User';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule]
})
export class RegisterComponent {
  user: User = new User();
  message = '';
  showPassword = false;
  successMessage: string = '';
errorMessage: string = '';

  constructor(private userService: UserServiceService, private router: Router) {}

 register() {
  this.userService.register(this.user).subscribe({
    next: (res) => {
      this.successMessage = res.message || 'Registered successfully';
      this.errorMessage = '';
      setTimeout(() => {
        this.router.navigate(['/login']);
      }, 4000);
    },
    error: (err) => {
      this.errorMessage = err.error.message || 'Registration failed.';
      this.successMessage = '';
    }
  });
}}
