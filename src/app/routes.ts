import { Routes } from "@angular/router";
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { MainPageComponent } from "./main-page/main-page.component";
import { ScorePageComponent } from "./score-page/score-page.component";

const routeConfig: Routes = [
    {
        path: '',
        component: LandingPageComponent,
        title: 'landing Page'
    },
    {
        path: 'mainpage',
        component: MainPageComponent,
        title: 'Main Page'
    },
    {
        path: 'scorepage',
        component: ScorePageComponent,
        title: 'score Page'
    },
   
];

export default routeConfig;