export class Student {
  id: number;

  firstname: string;
  lastname: string;

  email: string;

  dob: string;

  gender: string;

  qualification: string;

  hobbies: string;

  language: string;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
