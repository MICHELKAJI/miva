import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// Importation des composants autonomes
import { AboutSectionComponent } from './about-section/about-section.component';
import { ButtonFlottingComponent } from './button-flotting/button-flotting.component';
import { BannerComponent } from './banner/banner.component';
import { CitationComponent } from './citation/citation.component';
import { ContactComponent } from './contact/contact.component';
import { FormComponent } from './form/form.component';
import { CarouselComponent } from './carousel/carousel.component';
import { FeedbackComponent } from './feedback/feedback.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forRoot(routes),
    AboutSectionComponent,
    CarouselComponent,
    ButtonFlottingComponent,
    BannerComponent,
    CitationComponent,
    ContactComponent,
    FormComponent,
    FeedbackComponent
  ]
})
export class AppModule { }
