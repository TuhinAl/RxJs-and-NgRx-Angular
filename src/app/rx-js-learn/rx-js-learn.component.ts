import {Component, OnInit} from '@angular/core';
import {Observable, of} from "rxjs";
import {StudentDto} from "./student-dto";

@Component({
  selector: 'app-rx-js-learn',
  templateUrl: './rx-js-learn.component.html',
  styleUrls: ['./rx-js-learn.component.scss']
})
export class RxJSLearnComponent implements OnInit {

  agents !: Observable<string>;
  source: Observable<number> = of(10, 12, 14, 18, 27, 33.33, 25.65);
  source2: Observable<any> = of({name: 'Brian'}, [1, 2, 3], function hello() {
    return 'Hello';
  });
   studentsList : Observable<StudentDto> = of({id: 1001, name: "Selim Islam", age:'26'},
     {id: 1002, name: "Jasim Islam", age:'23'},
     {id: 1003, name: "Razu Ahmed", age:'28'},
     {id: 1004, name: "Shaiful Islam", age:'33'},
     {id: 1005, name: "Abdur Razzak", age:'41'})
  constructor() {
  }

  ngOnInit(): void {

    this.agents = new Observable(
      function (observer) {
        try {
          observer.next("Tuhin");
          observer.next("Tanvir");
          observer.next("Atiq");

        } catch (e) {
          observer.error(e);
        }
      }
    );

    this.agents.subscribe(data => {
      console.log(data);
    });

// NgRX Bad practice
//     https://indepth.dev/posts/1442/ngrx-bad-practices

    //============== Of operator ========


    this.source.subscribe(value => {
      console.log(value)
    })
    this.source2.subscribe(value => {
      console.log(value)
    })

    // Subscribing to Obserable

    this.studentsList.subscribe( obj => {
      console.log(obj.name)
    },
      error => {
        console.log(error)
      }
      )


  }

}
