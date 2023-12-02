import { Component, inject } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio-service.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {

  private portfolioService = inject(PortfolioService);


  public projectsItems = [
    { language: 'es', title: 'Aquí puedes ver mis proyectos:', list: [
      {name: 'Clinicalia', img: '/clinicalia.png', description: ''},
      {name: 'Interview-faqs', img: '/interview-faqs.png', description: ''},
      {name: 'Mi PortFolio', img: '/portfolio.png', description: ''},
      {name: 'Reading List', img: '/reading-list.png', description: ''},
      {name: 'Mapa', img: '/map.jpg', description: ''},
      {name: 'Héroes', img: '/heroes-app.jpg', description: ''},
      {name: 'Gifs', img: '/gif-app.jpg', description: ''},
    ]},
    { language: 'en', title: 'Here you can see my projects:', list: [
      {name: 'Clinicalia', img: '/clinicalia.png', description: ''},
      {name: 'Interview-faqs', img: '/interview-faqs.png', description: ''},
      {name: 'My PortFolio', img: '/portfolio.png', description: ''},
      {name: 'Reading List', img: '/reading-list.png', description: ''},
      {name: 'Map', img: '/map.jpg', description: ''},
      {name: 'Heroes', img: '/heroes-app.jpg', description: ''},
      {name: 'Gifs', img: '/gif-app.jpg', description: ''},
    ]}
  ];

  getLanguage(): string {
    return this.portfolioService.getLanguage();
  }
}
