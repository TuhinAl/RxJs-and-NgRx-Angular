import {Component, OnInit} from '@angular/core';
import {Observable, of} from "rxjs";

@Component({
  selector: 'app-rx-js-learn',
  templateUrl: './rx-js-learn.component.html',
  styleUrls: ['./rx-js-learn.component.scss']
})
export class RxJSLearnComponent implements OnInit {

  agents !: Observable<string>;
  source: Observable<number> = of(10, 12, 14, 18, 27, 33.33, 25.65);
  source2: Observable<any> = of({ name: 'Brian' }, [1, 2, 3], function hello() {
    return 'Hello';
  });
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

    this.agents.subscribe(data=>{
      console.log(data);
    });



    //============== Of operator ========


    this.source.subscribe( value => {
      console.log(value)
    })
    this.source2.subscribe( value => {
      console.log(value)
    })





  }

}
