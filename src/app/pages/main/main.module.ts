import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './page/main.component';
import {MatTabsModule} from "@angular/material/tabs";
import {ComponentsModule} from "../../components/components.module";



@NgModule({
  declarations: [
    MainComponent
  ],
  exports: [
    MainComponent
  ],
  imports: [
    CommonModule,
    MatTabsModule,
    ComponentsModule
  ]
})
export class MainModule { }
