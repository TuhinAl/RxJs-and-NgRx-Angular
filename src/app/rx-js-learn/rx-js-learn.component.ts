import {Component, OnInit} from '@angular/core';
import {from, observable, Observable, of} from "rxjs";
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
   studentsList : Observable<StudentDto> = of({id: 1001, name: "Selim Islam", age:26},
     {id: 1002, name: "Jasim Islam", age:23},
     {id: 1003, name: "Razu Ahmed", age:28},
     {id: 1004, name: "Shaiful Islam", age:33},
     {id: 1005, name: "Abdur Razzak", age:41})

  fromOperator : Observable<string> = from(['Dhaka', 'Rajshahi', 'Khulna', 'Chattogram', 'Rangpur', 'Sylhet'])

  constructor() {
  }

  ngOnInit(): void {
    this.createObservableInOldStyle();
    this.asynchronousObservable();
    this.ofOperator();
    this.subscribeObservable();
    this.fromOperatorMethod();


  }



  // NgRX Bad practice
//     https://indepth.dev/posts/1442/ngrx-bad-practices

  createObservableInOldStyle(){
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
  }


  asynchronousObservable(){
    const teams = new Observable(
      observer => {
        try {
          observer.next("Real Madrid");
          observer.next("Arsenal");
          observer.next("Liverpool");
          observer.next("PSG");
          observer.next("Inter Milan");
          setInterval(() => {
            observer.next("Barcelona");
            // observer.complete()
          }, 3000)
          observer.next("Manchester United");
          observer.next("Chelsea");
          observer.next("Tottenham");
          observer.complete() // here i violate the rules
          observer.next("Manchester City");
          observer.next("Leeds");
        } catch (e) {
          observer.error(e)
        }

      }
    )
    console.log("======Observable asynchronous========")
    teams.subscribe( data =>{
      console.log(data)
    })
  }


  ofOperator(){
    this.source.subscribe(value => {
      console.log(value)
    })
    this.source2.subscribe(value => {
      console.log(value)
    })

  }

  subscribeObservable(){
    this.studentsList.subscribe( obj => {
        console.log(obj.name)
      },
      error => {
        console.log(error)
      }
    )
    this.studentsList.subscribe(name => {
      console.log(name.age)
    });
  }

  fromOperatorMethod(){
     this.fromOperator.subscribe(log => {
       console.log(log)
     })
  }

}
