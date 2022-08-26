import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";

@Component({
  selector: 'app-rx-js-learn',
  templateUrl: './rx-js-learn.component.html',
  styleUrls: ['./rx-js-learn.component.scss']
})
export class RxJSLearnComponent implements OnInit {

  agents !: Observable<string>;

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
    })
  }

}
