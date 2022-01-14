import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { AboutComponent } from './about/about.component';
import { RegisterUserComponent } from './authentication/register-user/register-user.component';
import { NotFoundComponent } from './error-pages/not-found/not-found.component'
import { HomeComponent } from './home/home.component'
import { LoginComponent } from './login/login.component';

const routes: Routes = [
    { path: '', component: HomeComponent,
children: [
    { path: 'company', loadChildren: () => import('./company/company.module').then(m => m.CompanyModule) },
    
]},
    { path: '404', component : NotFoundComponent},
    { path: 'login', component: LoginComponent},
    { path: 'login', component: HomeComponent},
    { path: 'about', component: AboutComponent},
    { path: 'authentication/register', component: RegisterUserComponent},
    { path: '**', redirectTo: '/404', pathMatch: 'full'},
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}
    
