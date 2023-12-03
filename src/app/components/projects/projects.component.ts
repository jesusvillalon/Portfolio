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
      {name: 'Clinicalia', img: 'clinicalia.png',
      description: ''},
      {name: 'Interview-faqs', img: 'interview-faqs.png',
      description: ''},
      {name: 'Mi PortFolio', img: 'portfolio.png',
      description: ''},
      {name: 'Reading List', img: 'reading-list.png',
      description: ''},
      {name: 'Mapa', img: 'map.jpg',
      description: ''},
      {name: 'Héroes', img: 'heroes-app.jpg',
      description: ''},
      {name: 'Gifs', img: 'gif-app.jpg',
      description: 'Aplicación para la búsqueda de gifs mediante una API.'},
    ]},
    { language: 'en', title: 'Here you can see my projects:', list: [
      {name: 'Clinicalia', img: 'clinicalia.png',
      description: ''},
      {name: 'Interview-faqs', img: 'interview-faqs.png',
      description: ''},
      {name: 'My PortFolio', img: 'portfolio.png',
      description: ''},
      {name: 'Reading List', img: 'reading-list.png',
      description: ''},
      {name: 'Map', img: 'map.jpg',
      description: ''},
      {name: 'Heroes', img: 'heroes-app.jpg',
      description: ''},
      {name: 'Gifs', img: 'gif-app.jpg',
      description: 'An application for searching gifs through an API.'},
    ]}
  ];

  public currentProjectIndex: number = 0;
  public isPlaying: boolean = false;
  public interval: any;

  startSlideshow(): void {
    this.isPlaying = true;
    this.interval = setInterval(() => {
      if (this.isPlaying) {
        this.showNextProject();
      }
    }, 3000);
  }

  playPause(): void {
    this.isPlaying = !this.isPlaying;
    if (this.isPlaying) {
      this.startSlideshow();
    } else {
      clearInterval(this.interval);
    }
    console.log(this.currentProjectIndex)
  }
  showNextProject(): void {
    const currentProjectList = this.projectsItems.find(item => item.language === this.getLanguage())?.list;
    if (currentProjectList) {
      this.currentProjectIndex = (this.currentProjectIndex + 1) % currentProjectList.length;
    }
    console.log(this.currentProjectIndex)
  }

  showPreviousProject(): void {
    const currentProjectList = this.projectsItems.find(item => item.language === this.getLanguage())?.list;
    if (currentProjectList) {
    this.currentProjectIndex = (this.currentProjectIndex - 1 + currentProjectList.length) % currentProjectList.length;
    }
    console.log(this.currentProjectIndex)
  }





  getLanguage(): string {
    return this.portfolioService.getLanguage();
  }

}
