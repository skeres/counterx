import { Action } from '@ngrx/store';
import { State } from './app.state';
import { GlobalConstants } from '../utils/counter.global.constant';
import { Detail } from '../models/detail';
import { ContentActionType, DecrementCounter, IncrementCounter } from './app.actions';

const initialState:State = {
  count:0,
  title:'initial state',
  details: []
}


export function theReducer(state:State = initialState, action: IncrementCounter | DecrementCounter):State {
  console.log('in function theReducer');
  console.log('action='+action);
  console.log('action.type='+action.type );

  switch(action.type) {
    //case GlobalConstants.INCREMENT:
    case ContentActionType.Increment :
      let theNewstate={ ...state,
                        count:state.count+action.payload,
                        details: [ ...state.details, <Detail>{date: new Date, buttonClicked:'addition'}]
                      };
      console.log('theNewstate='+theNewstate.count);
      return theNewstate;
    case ContentActionType.Decrement:
      let theNewstateIs={ ...state,
                          count: state.count+action.payload,
                          details: [ ...state.details, <Detail>{date: new Date, buttonClicked:'soustraction'}]
                        };
      console.log('theNewstateIs='+theNewstateIs.count);
      return theNewstateIs;
    default:
      return state;
  }

  return null;
}
