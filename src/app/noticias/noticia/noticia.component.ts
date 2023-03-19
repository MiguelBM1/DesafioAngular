import { Component, OnInit } from '@angular/core';
import { Inoticia } from '../interfaces/noticias.interface';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.css']
})
export class NoticiaComponent  {

  listanoticias: Inoticia[] = [
    {
      Encabezado: `Hydrogen VS Electric Cars`,
      descripcion:`Will hydrogen-fueled cars ever catch up to EVs?`
    },
    {
      Encabezado: `The Downsides of AI Artistry`,
      descripcion:` What are the possible adverse effects of on-demand AI image generation?`
    },
    {
      Encabezado: `Is VC Funding Drying Up?`,
      descripcion:` Private funding by VC firms is down 50% YOY. We take a look at what that means.`
    },
    
  ]

}
