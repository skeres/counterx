import { Action } from "@ngrx/store";
import { GlobalConstants } from "../utils/counter.global.constant";

export enum ContentActionType {
  Increment = '[COUNTER] INCREMENT',
  Decrement = '[COUNTER] DECREMENT',
  Multiply = '[COUNTER] MULTIPLY',
}



export class IncrementCounter implements Action {
  public type: string=ContentActionType.Increment;

  constructor(public payload:number) {};

}

export class DecrementCounter implements Action {
  public type: string=ContentActionType.Decrement

  constructor(public payload:number) {};

}



