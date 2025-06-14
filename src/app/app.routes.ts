import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

import { NotfoundComponent } from './notfound/notfound.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'security', component: AboutComponent },
    { path: 'more', component: SkillsComponent },
    { path: 'distros', component: PortfolioComponent },
    
    { path: '', component: HomeComponent},
    { path: '**', component: NotfoundComponent }
];
