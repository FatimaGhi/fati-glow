import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common';
import { AuthService } from '../service/auth.service';



@Component({
  selector: 'app-nav',
  imports: [RouterModule, CommonModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {

   userRole: string = '';
  isLoggedIn: boolean = false;
  constructor(private auth: AuthService,private router: Router) {}

 ngOnInit(): void {
  // this.auth.currentRole$.subscribe((role) => {
  //   if (role) {
  //     this.userRole = role;
  //     this.isLoggedIn = true;
  //   } else {
  //     this.userRole = '';
  //     this.isLoggedIn = false;
  //   }
  // });
  
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem('user');
    if (stored) {
      const user = JSON.parse(stored);
      this.auth.setRole(user.role); // 
    }
  }
  // bax ntakd 
   this.auth.currentRole$.subscribe((role) => {
    console.log(' Role changed:', role); 
    this.userRole = role ?? '';
    this.isLoggedIn = !!role;
  });
}

  logout() {
    localStorage.removeItem('user');
    // location.reload(); 
    this.auth.clearRole(); 
    this.router.navigate(['/home']);
  }


  


}
