import { Routes } from '@angular/router';
import { CourseListComponent } from './components/course-list/course-list';
import { CourseDetailComponent } from './components/course-detail/course-detail';
import { NotFoundComponent } from './components/not-found/not-found';

export const routes: Routes = [
  { path: '', redirectTo: 'courses', pathMatch: 'full' },
  { path: 'courses', component: CourseListComponent },
  { path: 'courses/:id', component: CourseDetailComponent },
  { path: '**', component: NotFoundComponent },
];
