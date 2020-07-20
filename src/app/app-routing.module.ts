import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentComponent} from './student/student.component';
import {AppComponent} from './app.component';

const routes: Routes = [
  {
    path: 'student',
    component: StudentComponent,
    data: { title: 'Student List' }
  },
  {
    path: '',
    component: AppComponent ,
    data: { title: 'Student List' }
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

  
}
