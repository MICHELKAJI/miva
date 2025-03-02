import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MenunavigationDirective } from './menunavigation.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MenunavigationDirective  // Importer au lieu de déclarer car c'est standalone
  ],
  exports: [
    MenunavigationDirective
  ]
})
export class SharedModule { } 