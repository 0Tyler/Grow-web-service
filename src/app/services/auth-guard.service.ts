import { AuthenticationService } from './authentication.service';
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

    constructor(private authenticationService: AuthenticationService) { }

    canActivate(
    ): boolean {
        console.log('AuthGuard#canActivate called');
        return this.authenticationService.isAuthenticated();
    }


}
