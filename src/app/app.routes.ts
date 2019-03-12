import{ Routes } from '@angular/router'; 
import { HomeComponent } from './home/home.component';
import  { AboutComponent} from './about/about.component';
import { HabComponent } from './hab/hab.component';
import { ExpComponent } from './exp/exp.component';
import { ResmComponent } from './resm/resm.component';
export const ROUTES: Routes =[
    {path: '', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'hab', component: HabComponent},
    {path: 'exp', component: ExpComponent},
    {path: 'resm', component: ResmComponent}
];