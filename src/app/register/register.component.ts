import { Component } from '@angular/core';
import { User } from '../models/User';
import { UserServiceService } from '../service/user-service.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'] 
})
export class RegisterComponent {
  user: User = new User();
  showPassword: boolean = false;
  message: string = '';

  constructor(private userService: UserServiceService) {}

  register() {
    this.userService.register(this.user).subscribe({
      next: (response) => {
        this.message = response.message || 'تم التسجيل بنجاح!';
        this.user = new User(); // reset form
      },
      error: (error) => {
        this.message = error.error.message || 'فشل في التسجيل.';
      }
    });
  }
}
