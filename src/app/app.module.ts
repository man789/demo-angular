import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoRoutingModule } from './demo/demo-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { ToFahrenheitPipe } from './pipes/to-fahrenheit.pipe';
import { ConvertTimePipe } from './pipes/convert-time.pipe';
import { ExercicesModule } from './exercices/exercices.module';
import '@angular/common/locales/global/fr';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DemoRoutingModule,
    ExercicesModule,
    ReactiveFormsModule
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'fr-BE' // 'de-DE' for Germany, 'fr-FR' for France ...
    }
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
