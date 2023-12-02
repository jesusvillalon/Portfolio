import { Component, OnInit, inject} from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio-service.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent{
  public menuItems = [
    { language: 'es', links: [
      { title: 'Inicio', route: '/' },
      { title: 'Sobre mí', route: '/about-me' },
      { title: 'Proyectos', route: '/projects' },
    ]},
    { language: 'en', links: [
      { title: 'Home', route: '/' },
      { title: 'About me', route: '/about-me' },
      { title: 'Projects', route: '/projects' },
    ]}
  ];
  constructor(private portfolioService: PortfolioService) {}

  getLanguage(): string {
    return this.portfolioService.getLanguage();
  }
  changeLanguage(){
    this.portfolioService.toggleLanguage();
  }
  getButtonText(): string {
    return this.portfolioService.getLanguage() === 'es' ? 'English' : 'Español';
  }
  scrollToTop(){
    window.scrollTo({top: 0, behavior: 'smooth'});
  }
  scrollToBottom(){
    const scrollHeight = document.documentElement.scrollHeight;
    window.scrollTo({ top: scrollHeight, behavior: 'smooth' });
  }

}


