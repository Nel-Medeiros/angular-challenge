import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    isLoggedIn = JSON.parse(localStorage.getItem('loggedIn') || 'false');
    redirectUrl: string;

    constructor(private http: HttpClient) { };

    login(): Observable<boolean> {
        return of(true).pipe(
            delay(1000),
            tap(val => {
                this.authenticate(true);
            })
        );
    }

    authenticate(isLoged: boolean) {
        this.isLoggedIn = isLoged;
        localStorage.setItem('loggedIn', 'true');
    }

    logout(): void {
        localStorage.setItem('loggedIn', 'false');
    }
}