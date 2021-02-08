import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './home/login/login.component';
import { Notfound404Component } from './notfound404/notfound404.component';


const routes: Routes = [
  {
    path: 'login', component: LoginComponent
  },
  {
		path: 'admin',
		loadChildren: () => import('./main/main/main.module').then((m) => m.MainModule)
	},
  {
    path:'', redirectTo: 'login', pathMatch: 'full',
  },
  {
    path: '**', component:Notfound404Component
  }
];

@NgModule({
  declarations: [LoginComponent, Notfound404Component],
  imports: [RouterModule.forRoot(routes), FormsModule, CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
