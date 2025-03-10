import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: '',
        redirectTo: 'home', 
        pathMatch: 'full'  
        //component: AppComponent 
    },
    { path: 'home', component: HomeComponent },
    {
      path: 'login',
      component: LoginComponent,
    },
    ];