import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CreateComponent} from "./tour/create/create.component";
import {ShowComponent} from "./tour/show/show.component";
import {TourDetailComponent} from "./tour/tour-detail/tour-detail.component";

const routes: Routes = [
  { path: 'create', component: CreateComponent },
  { path: 'show', component: ShowComponent},
  { path: '', component: ShowComponent},
  { path: 'tour-detail', component: TourDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
