import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterHomeComponent } from './counter-home/counter-home.component';
import { CounterOutputComponent } from './counter-home/counter-output/counter-output.component';
import { CounterButtonsComponent } from './counter-home/counter-buttons/counter-buttons.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter-home/state/counter.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

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
    AppRoutingModule,
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
