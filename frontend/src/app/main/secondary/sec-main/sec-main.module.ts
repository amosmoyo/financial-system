import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecMainComponent } from './sec-main.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'panel', component: SecMainComponent, outlet:'sidenav'
  }
]

@NgModule({
  declarations: [SecMainComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class SecMainModule { }
