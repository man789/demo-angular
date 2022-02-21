import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoRoutingModule } from './demo/demo-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { ToFahrenheitPipe } from './pipes/to-fahrenheit.pipe';
import { ConvertTimePipe } from './pipes/convert-time.pipe';
import { ExercicesModule } from './exercices/exercices.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DemoRoutingModule,
    ExercicesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
