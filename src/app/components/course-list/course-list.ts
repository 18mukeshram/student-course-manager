import { Component, OnInit } from '@angular/core';
import { Course } from '../../models/course.model';
import { CourseService } from '../../services/course.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Handles rendering and filtering of courses
@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.html',
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class CourseListComponent implements OnInit {
  courses: Course[] = [];
  filteredCourses: Course[] = [];
  searchTerm = '';

  constructor(private courseService: CourseService, private router: Router) {}

  ngOnInit(): void {
    this.courseService.getCourses().subscribe((courses) => {
      this.courses = courses;
      this.filteredCourses = courses;
    });
  }

  onSearchChange() {
    const term = this.searchTerm.toLowerCase();
    this.filteredCourses = this.courses.filter(
      (course) =>
        course.name.toLowerCase().includes(term) || course.code.toLowerCase().includes(term)
    );
  }

  goToCourse(courseId: number) {
    this.router.navigate(['/courses', courseId]);
  }
}
