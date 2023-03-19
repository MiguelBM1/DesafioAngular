import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasnoticiasComponent } from './masnoticias/masnoticias.component';



@NgModule({
  declarations: [
    MasnoticiasComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    MasnoticiasComponent
  ]
})
export class NbajasModule { }
