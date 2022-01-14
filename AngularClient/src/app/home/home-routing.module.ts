import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';
import { MatMenuModule } from '@angular/material/menu';
import { MyRecipesComponent } from '../my-recipes/my-recipes.component';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent },
    { path: 'myrecipes', component: MyRecipesComponent},
    { path: '**', redirectTo: 'home'},

]

@NgModule({  
  imports: 
  [
    RouterModule.forChild(routes),
    MatMenuModule,
  ],

  exports: [RouterModule],
  declarations: []  
})
export class HomeModule { }
