import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TourComponent } from './tour/tour.component';
import {FormsModule} from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { ShowComponent } from './tour/show/show.component';
import { CreateComponent } from './tour/create/create.component';
import { EditComponent } from './tour/edit/edit.component';
import { TourDetailComponent } from './tour/tour-detail/tour-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    TourComponent,
    ShowComponent,
    CreateComponent,
    EditComponent,
    TourDetailComponent
  ],
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
