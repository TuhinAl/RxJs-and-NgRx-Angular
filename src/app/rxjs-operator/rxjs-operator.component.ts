import {Component, OnInit} from '@angular/core';
import {filter, from, map, noop, Observable, Observer, shareReplay, tap} from "rxjs";
import {StudentDto} from "../rx-js-learn/student-dto";
import {Course} from "./course";

@Component({
  selector: 'app-rxjs-operator',
  templateUrl: './rxjs-operator.component.html',
  styleUrls: ['./rxjs-operator.component.scss']
})
export class RxjsOperatorComponent implements OnInit {

  numberArray$: Observable<number> = from([10, 12, 5, 15, 18, 22, 35, 19, 21, 33, 42, 13, 27, 23, 38]);

  beginnersCourse !: Course[];
  advanceCourse !: Course[];
  beginnersCourse$ !: Observable<Course[]>;
  advanceCourse$ !: Observable<Course[]>;

  studentsList$: Observable<StudentDto> = from([{id: 1001, name: "Selim Islam", age: 26},
    {id: 1002, name: "Jasim Islam", age: 13},
    {id: 1003, name: "Razu Ahmed", age: 24},
    {id: 1003, name: "Sajeb Raihan", age: 18},
    {id: 1003, name: "Afif Hasan", age: 28},
    {id: 1004, name: "Shaiful Islam", age: 19},
    {id: 1005, name: "Abdur Razzak", age: 41}])

  constructor() {
  }


  ngOnInit(): void {
    // this.inBetweenNumber();
    this.teenageStudent();
    this.mapOperator();
    this.declarativeStyle();
    this.reactivePattern();
  }


  //observable concatenation


  //declarative style
  declarativeStyle() {
    const courses$ = this.createHttpObservable('http://localhost:3000/payload');
    courses$.subscribe(courses => {
        this.beginnersCourse = courses.filter((course: Course) => course.category === 'BEGINNER');
        this.advanceCourse = courses.filter((course: Course) => course.category === 'ADVANCED');
      },
      noop,
      () => {
        console.log('completed...')
      })
  }

  //reactivePattern()
  reactivePattern(){
    const courses$ = this.createHttpObservable('http://localhost:3000/payload');
    this.beginnersCourse$ = courses$.pipe(map(courses => courses.filter((course: Course) => course.category === 'BEGINNER')))
    this.advanceCourse$ = courses$.pipe(map(courses => courses.filter((course: Course) => course.category === 'ADVANCED')))
  }


  //map()
  mapOperator() {
    const http$ = this.createHttpObservable('http://localhost:3000/payload').pipe(
      tap(() => {
        console.log("HTTP Request Executed")
      }),
      shareReplay()
    );
    http$.subscribe(data => {
      console.log(data),
        noop,
        () => {
          console.log('completed')
        }
    })
  }


  //filter()
// in between number
  inBetweenNumber() {
    this.numberArray$
      .pipe(filter(data => data > 18 && data < 25))
      .subscribe(value => {
        console.log(value)
      })

  }

  // filtering array of object
  teenageStudent() {
    this.studentsList$.pipe(filter(student => student.age >= 13 && student.age <= 19))
      .subscribe(data => {
        console.log(data.name, "==> ", data.id)
      })
  }


  interval() {
    document.addEventListener('click', event => {
      console.log(event);
    })
    let count = 0;
    setInterval(() => {
      console.log(++count);
    }, 2000)

    setTimeout(() => {
      console.log('finished .....');
    }, 7000)

    setTimeout(() => {
      console.log('please stop your interval .....');
    }, 11000)

    setTimeout(() => {
      console.log('Hey are you there .....');
    }, 20000)
    setTimeout(() => {
      console.log('Stop please .....');
    }, 29000)
  }


  createHttpObservable(url: string): Observable<any> {
    return Observable.create(
      (observer: Observer<any>) => {
        fetch(url)
          .then(response => {
            return response.json(); // here return a promises
          })
          .then(body => {
            observer.next(body);
            observer.complete()
          })
          .catch(error => {
            observer.error(error);
          })
      });
  }


}
