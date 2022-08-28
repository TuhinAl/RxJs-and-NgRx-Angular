import { Component, OnInit } from '@angular/core';
import {filter, from, map, Observable, of} from "rxjs";
import {StudentDto} from "../rx-js-learn/student-dto";
import {toNumbers} from "@angular/compiler-cli/src/diagnostics/typescript_version";

@Component({
  selector: 'app-rxjs-operator',
  templateUrl: './rxjs-operator.component.html',
  styleUrls: ['./rxjs-operator.component.scss']
})
export class RxjsOperatorComponent implements OnInit {

  numberArray$: Observable<number> = from([10, 12, 5, 15, 18, 22, 35, 19, 21, 33, 42, 13, 27, 23, 38]);

  studentsList$ : Observable<StudentDto> = from([{id: 1001, name: "Selim Islam", age:26},
    {id: 1002, name: "Jasim Islam", age:13},
    {id: 1003, name: "Razu Ahmed", age:24},
    {id: 1003, name: "Sajeb Raihan", age:18},
    {id: 1003, name: "Afif Hasan", age:28},
    {id: 1004, name: "Shaiful Islam", age:19},
    {id: 1005, name: "Abdur Razzak", age:41}])
  constructor() { }


  ngOnInit(): void {
    // this.inBetweenNumber();
    this.teenageStudent();
  }

  //filter()
// in between number
  inBetweenNumber(){
    this.numberArray$
      .pipe(filter( data => data > 18 && data < 25))
      .subscribe( value => {
        console.log(value)})

  }

  // filtering array of object
  teenageStudent(){
    this.studentsList$.pipe(filter(student => student.age >= 13 && student.age <= 19))
      .subscribe(data => {
        console.log(data.name,"==> ", data.id)})
  }






}