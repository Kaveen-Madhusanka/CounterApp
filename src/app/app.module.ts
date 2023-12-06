import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterHomeComponent } from './counter-home/counter-home.component';
import { CounterOutputComponent } from './counter-home/counter-output/counter-output.component';
import { CounterButtonsComponent } from './counter-home/counter-buttons/counter-buttons.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter-home/state/counter.reducer';

@NgModule({
  declarations: [	
    AppComponent,
      CounterHomeComponent,
      CounterOutputComponent,
      CounterButtonsComponent
   ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({counter: counterReducer}),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
