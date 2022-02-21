import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToFahrenheitPipe } from '../pipes/to-fahrenheit.pipe';
import { ConvertTimePipe } from '../pipes/convert-time.pipe';



@NgModule({
  declarations: [
    ToFahrenheitPipe,
    ConvertTimePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ToFahrenheitPipe,
    ConvertTimePipe
  ]
})
export class SharedModule { }
