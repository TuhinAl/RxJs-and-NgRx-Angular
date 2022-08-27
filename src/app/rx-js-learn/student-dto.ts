export class StudentDto {
  id !: number ;
  name !: string;
  age !: string;


  constructor(id: number, name: string, age: string) {
    this.id = id;
    this.name = name;
    this.age = age;
  }
}
