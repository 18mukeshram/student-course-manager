# 🎓 Student Course Management System (Angular SPA)

A responsive Single Page Application (SPA) built with **Angular (standalone components)** and **Tailwind CSS**. The app provides course browsing, dynamic search/filtering, course detail pages, and student enrollment management (add/remove students).

---

## Features

- Course listing with live search and filtering
- Course detail pages with student list
- Add and remove student functionality (in-memory)
- Angular routing with standalone components
- Service-driven state management pattern
- Responsive dashboard UI using Tailwind CSS
- 404 Not Found page for invalid routes

---

## Tech Stack

- Angular (TypeScript)
- Tailwind CSS
- SCSS
- RxJS (used in service patterns)
- Angular CLI

Tools: VS Code, Git, GitHub, Chrome DevTools

---

## Folder Structure

student-course-manager/
├─ src/
│ ├─ app/
│ │ ├─ components/
│ │ │ ├─ course-list/
│ │ │ ├─ course-detail/
│ │ │ └─ not-found/
│ │ ├─ services/
│ │ │ └─ course.service.ts
│ │ ├─ app.routes.ts
│ │ └─ app.ts
│ └─ assets/
├─ tailwind.config.js
├─ package.json
└─ README.md

yaml
Copy code

---

## Setup & Run (local)

1. Clone:
   git clone https://github.com/<your-username>/student-course-manager.git
   cd student-course-manager

Install dependencies:
npm install

Run dev server:
ng serve

Open:
http://localhost:4200

## Notes on Implementation

Uses Angular standalone components and a modern routing setup (app.routes.ts).

Course data is managed in a service (CourseService) using a simple in-memory model to demonstrate component-service interaction.

Two-way binding ([(ngModel)]) used for search input and add-student form.

Tailwind configured for responsive utility classes and design consistency.

## What I learned

Building SPAs with Angular standalone components

Routing and route parameter handling

Service-based state management and component communication

Integrating Tailwind with an Angular project

Debugging template errors and lifecycle-related issues

## Future Improvements

Add a backend (Node/Express or Firebase) for persistent data storage

Implement authentication and role-based access

Add pagination, sorting, and student profile pages

Deploy a production build and attach a live demo link

## License & Contact

MIT License — feel free to reuse.
Contact: mukeshrambellamkonda@gmail.com
