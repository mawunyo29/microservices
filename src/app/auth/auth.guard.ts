import {inject}  from'@angular/core';
import  {Router ,NavigationExtras} from '@angular/router';
import { AuthService } from './auth.service';

export const authGuard = () => {
    const authService = inject(AuthService);
    const router = inject(Router);
     if (!authService.isLoggedIn) {
        router.navigate(['/login']);
    }

    const sessoinId = localStorage.getItem('token');
    
    const navigationExtras: NavigationExtras = {
        queryParams: { 'sessionId': sessoinId },
        fragment: 'anchor'
    };
    router.navigate(['/admin'], navigationExtras);

    };