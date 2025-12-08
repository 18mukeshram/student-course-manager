import { Injectable } from '@angular/core';
import { Course, Student } from '../models/course.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  private courses: Course[] = [
    {
      id: 1,
      name: 'Web Development Basics',
      code: 'WD101',
      instructor: 'John Doe',
      credits: 3,
      students: [
        { id: 1, name: 'Alice', email: 'alice@example.com' },
        { id: 2, name: 'Bob', email: 'bob@example.com' },
      ],
    },
    {
      id: 2,
      name: 'Introduction to Angular',
      code: 'ANG202',
      instructor: 'Mukesh Ram',
      credits: 4,
      students: [{ id: 3, name: 'Charlie', email: 'charlie@example.com' }],
    },
  ];

  private coursesSubject = new BehaviorSubject<Course[]>(this.courses);

  constructor() {}

  getCourses(): Observable<Course[]> {
    return this.coursesSubject.asObservable();
  }

  getCourseById(id: number): Course | undefined {
    return this.courses.find((c) => c.id === id);
  }

  addStudentToCourse(courseId: number, student: Omit<Student, 'id'>): void {
    const course = this.getCourseById(courseId);
    if (!course) return;

    const newId =
      course.students.length > 0 ? Math.max(...course.students.map((s) => s.id)) + 1 : 1;

    const newStudent: Student = { id: newId, ...student };
    course.students.push(newStudent);

    this.coursesSubject.next(this.courses);
  }

  removeStudentFromCourse(courseId: number, studentId: number): void {
    const course = this.getCourseById(courseId);
    if (!course) return;

    course.students = course.students.filter((s) => s.id !== studentId);
    this.coursesSubject.next(this.courses);
  }
}
