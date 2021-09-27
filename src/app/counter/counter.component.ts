import { Component, OnInit } from '@angular/core';

//NGRX
import { select, Store } from '@ngrx/store'
import { GlobalConstants } from '../utils/counter.global.constant';

//ajout de datas au store
import { Detail } from '../models/detail';
import { DecrementCounter, IncrementCounter } from '../state/app.actions';

@Component({
  selector: 'appcx-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  total=0;
  allDetails:[];

  constructor(private store:Store<any>) { }

  ngOnInit(): void {
    //on s'abonne au store pour l'élement définit dans app.module.ts {myAppstate:theReducer}
    this.store.pipe(select("myAppstate")).subscribe(data => {
      console.log(data);
      this.total=data.count;
      this.allDetails=data.details;
    })
  }
s
  increment(){
    //this.total+=1;
    console.log('total='+this.total);
    //this.store.dispatch({type:GlobalConstants.INCREMENT, payload:1})  // Un reducer doit prendre en charge cette demande de "dispatch"
    this.store.dispatch(new IncrementCounter(1));
  }

  decrement(){
    //this.total+=-1;
    console.log('total='+this.total);
    //this.store.dispatch({type:GlobalConstants.DECREMENT, payload:-1})
    this.store.dispatch(new DecrementCounter(-1));
  }


}
