import { Component, signal } from '@angular/core';


@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss'
})
export class KnowledgeComponent {
  public arrayKnowledge = signal([
    {
      src: 'assets/icons/Knowledg/html5.svg',
      alt: 'Ícone de conhecimento de html5',
    },
    {
      src: 'assets/icons/Knowledg/css3.svg',
      alt: 'Ícone de conhecimento de css3',
    },
    {
      src: 'assets/icons/Knowledg/javascript.svg',
      alt: 'Ícone de conhecimento de javascript',
    },
    {
      src: 'assets/icons/Knowledg/php.svg',
      alt: 'Ícone de conhecimento de php',
    },
    {
      src: 'assets/icons/Knowledg/angular.svg',
      alt: 'Ícone de conhecimento de angular',
    },
    {
      src: 'assets/icons/Knowledg/nodejs.svg',
      alt: 'Ícone de conhecimento de nodejs',
    },
  ]);
}
