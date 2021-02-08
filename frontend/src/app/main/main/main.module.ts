import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { MainComponent } from './main.component';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from 'src/app/home/navbar/navbar.component';
import { PortalComponent } from '../portal/portal.component';
import { SecMainModule } from '../secondary/sec-main/sec-main.module';
import { StudentListComponent } from '../students/student-list/student-list.component';

const routes: Routes = [
  {
    path:'home', component: MainComponent,
    children: [
      {
        path: '', redirectTo:'portal', pathMatch: 'full'
      },
      {
        path: 'portal', component: PortalComponent
      },
      {
        path: 'students', component: StudentListComponent
      }
    ]
  }
]

@NgModule({
  declarations: [MainComponent,NavbarComponent, PortalComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class MainModule { }
