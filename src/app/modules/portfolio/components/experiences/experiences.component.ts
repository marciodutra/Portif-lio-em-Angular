import { Component, signal } from '@angular/core';

// Interface
import { IExperiences } from '../../interface/IExperiences.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss',
})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperiences[]>([
    {
      summary: {
        strong: 'Desenvolvedor Fulstack',
        p: 'Rudi Imóveis | 2021',
      },
      text: '<p>Desenvolvimento de sistema para imobiliária em PHP, SQL, HTML 5, Javascript, CSS.</p>',
    },
    {
      summary: {
        strong: 'Desenvolvedor Fulstack',
        p: 'Feragem Ferreira | 2020',
      },
      text: '<p>Desenvolvimento de ecommerce em PHP, SQL, HTML 5, Javascript, CSS.</p>',
    },
    {
      summary: {
        strong: 'Front-end Especialista',
        p: 'DBServer | Jan 2018 - Abril 2019',
      },
      text: '<p>Desenvolvimento de sistemas em PHP, SQL, HTML 5, Javascript, CSS.</p>',
    },
  ]);
}
