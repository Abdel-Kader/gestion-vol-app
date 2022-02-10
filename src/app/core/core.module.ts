import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PublicModule} from "../public/public.module";
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { LoaderComponent } from './components/loader/loader.component';
import {RouterModule} from "@angular/router";


@NgModule({
    declarations: [
        NotFoundComponent,
        LoaderComponent
    ],
    exports: [
        LoaderComponent
    ],
    imports: [
        CommonModule,
        PublicModule,
        HttpClientModule,
        FormsModule,
        RouterModule,
    ]
})
export class CoreModule { }
