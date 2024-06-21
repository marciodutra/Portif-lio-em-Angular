import { Component, inject, signal } from '@angular/core';

// Interface
import { IProjects } from '../../interface/IProjects.interface';

// Material
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

// Enum
import { EDialogPanelClass } from '../../enum/EDialogPanelClass.enum';

// Dialog
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  #dialog = inject(MatDialog);

  public arrayProjects = signal<IProjects[]>([
    {
      src: 'assets/img/projects/vfull.png',
      alt: 'Meus projetos',
      title: 'Portifólio com os projetos',
      with: '100px',
      height: '51px',
      description:
        '<p>Nesse portifólio tem todos projetos que desenvolvi e hospedei. É só escolher um projeto, acessar e utilizar. Abaixo de cada projeto tem uma explicação como também usuários e senhas necessárias para usar o projeto.</p>',
      links: [
        {
          name: 'Conheça o site',
          href: 'http://marciodutra.rf.gd/',

        },
      ],
    },

  ]);

  public openDialog(data: IProjects) {
    this.#dialog.open(DialogProjectsComponent, {
      data,
      panelClass: EDialogPanelClass.PROJECTS,
    });
  }
}
