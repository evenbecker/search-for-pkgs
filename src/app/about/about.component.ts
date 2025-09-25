import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterLinkActive, RouterOutlet, RouterLink, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLinkActive, RouterOutlet, RouterLink],
  templateUrl: './about.component.html',
  styleUrls: [
    './about.component.css',
    '/src/styles.css'
  ]
})
export class AboutComponent implements OnInit {
  constructor(
    private titleService: Title, 
    private activatedRoute: ActivatedRoute) {
    this.titleService.setTitle('init freedom | Security Insight')
  }
    ngOnInit() {
      this.activatedRoute.fragment.subscribe((fragment: string | null) => {
        if (fragment) this.jumpToSection(fragment);
      });
    }
  
    jumpToSection(section: string | null) {
      if (section) document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
    }
  
}
