import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CardComponent } from '../card/card.component';
import { Card } from '../_models/card';
import { Tag } from '../_models/tags';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
  providers: []
})
export class PortfolioComponent {

  projects: Card[] = [
    {
      id: 1,
      name: 'Void Linux',
      summary: "A",
      description: "F.",
      projectLink: 'https://voidlinux.org/',
      tags: [Tag.RUNIT, Tag.ELOGIND],
      pictures: []
    },
    {
      id: 2,
      name: 'Alpine Linux',
      summary: "A.",
      description: "T.",
      projectLink: 'https://www.alpinelinux.org/',
      tags: [Tag.OPENRC, Tag.CONSOLEKIT2, Tag.ELOGIND],
      pictures: []
    },
    {
      id: 3,
      name: 'Gentoo',
      summary: 'T.',
      description: 'Th.',
      projectLink: 'https://www.gentoo.org/',
      tags: [Tag.ELOGIND, Tag.RUNIT, Tag.OPENRC ],
      pictures: []
    },
    {
      id: 4,
      name: 'Devuan',
      summary: 'T.',
      description: 'I.',
      projectLink: 'https://www.devuan.org/',
      tags: [Tag.ELOGIND, Tag.CONSOLEKIT2, Tag.SYSV, Tag.OPENRC, Tag.RUNIT],
      pictures: []
    },
    {
      id: 5,
      name: 'MX Linux',
      summary: 'T.',
      description: 'T.',
      projectLink: 'https://mxlinux.org/',
      tags: [Tag.ELOGIND, Tag.SYSV],
      pictures: []
    },
    {
      id: 6,
      name: 'AntiX',
      summary: 'A.',
      description: 'T.',
      projectLink: 'https://antixlinux.com/',
      tags: [Tag.CONSOLEKIT2, Tag.RUNIT, Tag.SYSV],
      pictures: []
    },
    {
      id: 7,
      name: 'Chimera Linux',
      summary: "Th.",
      description: "T.",
      projectLink: 'https://chimera-linux.org/',
      tags: [Tag.DINIT, Tag.ELOGIND],
      pictures: []
    },
    {
      id: 8,
      name: 'Parabola',
      summary: 'T.',
      description: "T.",
      projectLink: 'https://www.parabola.nu/',
      tags: [Tag.LIBREKERNEL, Tag.OPENRC, Tag.ELOGIND],
      pictures: []
    },
    {
      id: 9,
      name: 'Artix',
      summary: '.',
      description: ".",
      projectLink: 'https://artixlinux.org/',
      tags: [Tag.ELOGIND, Tag.DINIT, Tag.RUNIT, Tag.S6, Tag.OPENRC],
      pictures: []
    },
    {
      id: 10,
      name: 'Guix',
      summary: 'A 100% free software distribution with a focus on the promotion and tight integration of GNU components.',
      description: "T",
      projectLink: 'https://guix.gnu.org/',
      tags: [Tag.LIBREKERNEL, Tag.SHEPHERD, Tag.ELOGIND],
      pictures: []
    },
    {
      id: 11,
      name: 'Obarun',
      summary: 'Arch Linux based distro with skarnet s6/66 suite.',
      description: "N.",
      projectLink: 'https://web.obarun.org/',
      tags: [Tag.S6, Tag.CONSOLEKIT2],
      pictures: []
    },
    {
      id: 12,
      name: 'PCLinuxOS',
      summary: 'A user-friendly, independently developed Linux distribution with  rolling updates and many browsers available.',
      description: ".",
      projectLink: 'https://www.pclinuxos.com/',
      tags: [Tag.CONSOLEKIT2, Tag.SYSV],
      pictures: []
    }
    

  ]


  constructor(private titleService: Title) {
    this.titleService.setTitle('init freedom | Systemd-free distros')
  }

  trackById(index: number, project: Card): number {
    return project.id;
  }

}
