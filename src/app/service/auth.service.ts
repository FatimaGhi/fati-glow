import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
    private roleSource = new BehaviorSubject<string | null>(null);
  currentRole$ = this.roleSource.asObservable();

  setRole(role: string) {
    this.roleSource.next(role);
  }

  clearRole() {
    this.roleSource.next(null);
  }
}
