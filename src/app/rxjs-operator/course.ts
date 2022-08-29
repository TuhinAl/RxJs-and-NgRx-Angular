export class Course {
  id !: number;
  descrption !: string;
  category !: string;
  lessonsCount !: number


  constructor(id: number, descrption: string, category: string, lessonsCount: number) {
    this.id = id;
    this.descrption = descrption;
    this.category = category;
    this.lessonsCount = lessonsCount;
  }
}
