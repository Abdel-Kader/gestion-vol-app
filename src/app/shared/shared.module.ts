import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar/navbar.component';
import {RouterModule} from "@angular/router";



@NgModule({
    declarations: [
        NavbarComponent
    ],
    exports: [
      CommonModule,
      NavbarComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ]
})
export class SharedModule { }
