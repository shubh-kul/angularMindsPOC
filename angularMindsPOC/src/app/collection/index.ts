import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollectionComponent } from './collection.component';
import { Routes, RouterModule } from '@angular/router';
import {MatCardModule} from '@angular/material/card';
const routes: Routes = [
  {path: '', component: CollectionComponent}
];

@NgModule({
  declarations: [CollectionComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatCardModule
  ]
})
export class CollectionModule { }
