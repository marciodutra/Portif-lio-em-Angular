import { Component, signal } from '@angular/core';


@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  public arrayProjects = signal([
    {
      src: 'assets/img/projects/vfull.png',
      alt: "Sistema de gerenciamento de reservas",
      title: "Hotel Bluebird",
      with: '100px',
      height: '51px',
      description: '',
      links: [
        {
          name: 'Conheça o projeto',
          href: 'http://hotelbluebird.rf.gd/index.php?i=1'
        },
      ],
    },
  ]);
}
