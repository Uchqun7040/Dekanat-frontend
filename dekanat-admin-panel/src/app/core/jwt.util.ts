import { Injectable } from "@angular/core";
import jwt_decode from "jwt-decode";
import { JwtHelperService } from "@auth0/angular-jwt"
@Injectable({
    providedIn: 'root'
})
export class JwtUtil {

    constructor() {

    }
    save(token: any, rememberMe: Boolean) {
        if (rememberMe) {
            localStorage.setItem('token', token);
        } else {
            sessionStorage.setItem('token', token);
        }

    }

    clear() {

        localStorage.removeItem('token');
        sessionStorage.removeItem('token');

    }

    getToken() {
        let token = localStorage.getItem('token');
        if (!token)
            token = sessionStorage.getItem('token');

        return token;
    }
    getData(): any {
        const token = this.getToken();
        if (token) {

            return jwt_decode(token);

        }
        return null;
    }

    getRoles(): string[] {
        let data = this.getData();

        if (data && data.roles) {
            return data.roles;
        }
        return [];

    }

    isLoggedIn() {
        let jwt = new JwtHelperService();
        let token = this.getToken();
        if (!token)
            return false;
        let expireDate = jwt.getTokenExpirationDate(token);
        // let isExpired = jwt.isTokenExpired(token);
        let now = new Date();
        if(expireDate !==null && now > expireDate ){
            return false;
        }
        return true;
    }

}


