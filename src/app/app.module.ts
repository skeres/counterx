import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';

// NGRX
import  { StoreFeatureModule, StoreModule } from '@ngrx/store';
import { theReducer } from './state/app.state.reducer';

//pour le tools redux pour chrome
import { StoreDevtoolsModule } from '@ngrx/store-devtools';


@NgModule({
  declarations: [
    AppComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({myAppstate:theReducer}),   //myAppstate est le nom arbitraire donné à cet état que l'on veut gérer
    StoreDevtoolsModule.instrument({   //https://ngrx.io/guide/store-devtools
      maxAge: 10,
      name:'mon counterX'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
