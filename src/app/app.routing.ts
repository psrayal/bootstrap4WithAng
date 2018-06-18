import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { NgModule } from "@angular/core";
import { DataComponent } from "./data/data.component";
import { NewsComponent } from "./news/news.component";
import { ResearchComponent } from "./research/research.component";
import { ContactComponent } from "./contact/contact.component";

const appRoutes: Routes = [
    { path: '', redirectTo : '/home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent},
    { path: 'data', component: DataComponent },
    { path: 'news', component: NewsComponent },
    { path: 'research', component: ResearchComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }