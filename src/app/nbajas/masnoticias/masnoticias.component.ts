import { Component, OnInit } from '@angular/core';
import { IMasnoticia } from '../interfaces/masnoticias.interface';

@Component({
  selector: 'app-masnoticias',
  templateUrl: './masnoticias.component.html',
  styleUrls: ['./masnoticias.component.css']
})
export class MasnoticiasComponent {
  listmasanoticias: IMasnoticia[] = [
    {
      numero: '01',
      Encabezado: `Reviving Retro PCs`,
      descripcion:`What happens when old PCs are given modern upgrades?`,
      imagen:'assets/images/image-retro-pcs.jpg'
    },
    {
      numero: '02',
      Encabezado: `Top 10 Laptops of 2022`,
      descripcion:`Our best picks for various needs and budgets.`,
      imagen:'assets/images/image-top-laptops.jpg'
    },
    {
      numero: '03',
      Encabezado: `The Growth of Gaming`,
      descripcion:`How the pandemic has sparked fresh opportunities.`,
      imagen:'assets/images/image-gaming-growth.jpg'
    }
    
    
  ]

}
