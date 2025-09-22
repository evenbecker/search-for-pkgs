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
      summary: "An independent Linux distribution that uses a powerful package manager, which was made from scratch, and the runit init system. It tries to exclude binary kernel blobs and is therefore as trustworthy as Devuan.",
      description: "F.",
      projectLink: 'https://voidlinux.org/',
      tags: [Tag.RUNIT, Tag.ELOGIND],
      pictures: []
    },
    {
      id: 2,
      name: 'Loc-OS',
      summary: "A distro based on Debian stable branch. SysV is the default init. LXDE is their flagship DE.",
      description: "T.",
      projectLink: 'https://loc-os.com/',
      tags: [Tag.SYSV, Tag.ELOGIND],
      pictures: []
    },
    {
      id: 3,
      name: 'Gentoo',
      summary: 'A highly flexible, source-based Linux distribution.',
      description: 'Th.',
      projectLink: 'https://www.gentoo.org/',
      tags: [Tag.ELOGIND, Tag.OPENRC ],
      pictures: []
    },
    {
      id: 4,
      name: 'Devuan',
      summary: 'A Debian fork born from a bitter systemd revolt.',
      description: 'I.',
      projectLink: 'https://www.devuan.org/',
      tags: [Tag.ELOGIND, Tag.CONSOLEKIT2, Tag.SYSV, Tag.OPENRC, Tag.RUNIT],
      pictures: []
    },
    {
      id: 5,
      name: 'MX Linux',
      summary: 'A Debian-based Linux distribution with additional software.',
      description: 'T.',
      projectLink: 'https://mxlinux.org/',
      tags: [Tag.ELOGIND, Tag.SYSV],
      pictures: []
    },
    {
      id: 6,
      name: 'AntiX',
      summary: 'A lightweight and Debian-based Linux distribution. No elogind. No libsystemd.',
      description: 'T.',
      projectLink: 'https://antixlinux.com/',
      tags: [Tag.CONSOLEKIT2, Tag.RUNIT, Tag.SYSV],
      pictures: []
    },
    {
      id: 7,
      name: 'Calculate Linux',
      summary: "A distro based on Gentoo. It comes with a user-friendly GUI installer and OpenRC.",
      description: "T.",
      projectLink: 'https://www.calculate-linux.org/',
      tags: [Tag.OPENRC, Tag.ELOGIND],
      pictures: []
    },
    {
      id: 8,
      name: 'Parabola GNU/Linux-libre',
      summary: 'A 100% free software distribution based on Arch Linux.',
      description: "T.",
      projectLink: 'https://www.parabola.nu/',
      tags: [Tag.LIBREKERNEL, Tag.OPENRC, Tag.ELOGIND],
      pictures: []
    },
    {
      id: 9,
      name: 'Artix',
      summary: 'Arch Linux based distro with many inits available.',
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
    },
    {
      id: 13,
      name: 'Slackware',
      summary: "One of the first distro in Linux history. Some packages need to be locally built.",
      description: "T.",
      projectLink: 'https://www.slackware.com/',
      tags: [Tag.SYSV, Tag.ELOGIND],
      pictures: []
    },
     {
      id: 14,
      name: 'Alpine Linux',
      summary: "A distro designed to be small, simple, and secure. Because of its small size and fast startup, Alpine Linux is commonly used in containers and routers.",
      description: "T.",
      projectLink: 'https://www.alpinelinux.org/',
      tags: [Tag.OPENRC, Tag.CONSOLEKIT2, Tag.ELOGIND],
      pictures: []
    },
    {
      id: 15,
      name: 'Chimera Linux',
      summary: "An independent and security-oriented Linux distribution that uses musl as its libc implementation, userland tools from FreeBSD, and dinit as its init system. The devs plan to replace elogind by Turnstile.",
      description: "T.",
      projectLink: 'https://chimera-linux.org/',
      tags: [Tag.DINIT, Tag.ELOGIND],
      pictures: []
    },
    

  ]


  constructor(private titleService: Title) {
    this.titleService.setTitle('init freedom | Systemd-free distros')
  }

  trackById(index: number, project: Card): number {
    return project.id;
  }

}
