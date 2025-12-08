import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from '../../models/course.model';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'app-course-detail',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './course-detail.html',
  styleUrl: './course-detail.scss',
})
export class CourseDetailComponent implements OnInit {
  course: Course | null = null;

  // form fields
  studentName = '';
  studentEmail = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private courseService: CourseService
  ) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    const id = idParam ? Number(idParam) : NaN;

    const found = this.courseService.getCourseById(id);
    if (!found) {
      this.router.navigate(['/courses']);
      return;
    }

    this.course = found;
  }

  addStudent() {
    if (!this.course) return;
    if (!this.studentName.trim() || !this.studentEmail.trim()) return;

    this.courseService.addStudentToCourse(this.course.id, {
      name: this.studentName.trim(),
      email: this.studentEmail.trim(),
    });

    this.course = this.courseService.getCourseById(this.course.id)!;

    this.studentName = '';
    this.studentEmail = '';
  }

  removeStudent(studentId: number) {
    if (!this.course) return;

    this.courseService.removeStudentFromCourse(this.course.id, studentId);
    this.course = this.courseService.getCourseById(this.course.id)!;
  }
}
