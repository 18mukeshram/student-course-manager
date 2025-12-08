export interface Student {
  id: number;
  name: string;
  email: string;
}

export interface Course {
  id: number;
  name: string;
  code: string;
  instructor: string;
  credits: number;
  students: Student[];
}
