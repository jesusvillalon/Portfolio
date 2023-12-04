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
      {id: 0, name: 'Clinicalia', img: 'clinicalia.png',
      description: 'Plataforma para el registro de clínicas de fisioterapia, profesionales y pacientes. Manejamos tanto el registro, el inicio de sesión además de la reserva citas por parte del profesional o el paciente, implementando una pasarela de pago para realizar la cita.'},
      {id: 1, name: 'Interview-faqs', img: 'interview-faqs.png',
      description: 'Interview Faqs es una plataforma adaptada para abordar las preguntas teóricas más comunes en las entrevistas de trabajo para desarrolladores frontend, organizadas en tres niveles y en la que hemos incluido enlaces externos a recursos de aprendizaje para la parte técnica de las entrevistas.'},
      {id: 2, name: 'Mi PortFolio', img: 'portfolio.png',
      description: 'Este es mi propio portfolio donde muestro las tecnologías que uso, realizo una presentación hablando un poco sobre mí e incluyo los proyectos en los que he trabajado, ya sea en equipo o por mi cuenta. Además podéis contactarme ya sea a través del formulario o de cualquier otra manera.'},
      {id: 3, name: 'Reading List', img: 'reading-list.png',
      description: 'Lista de libros con su correspondiente lista de lectura, la cual puedo ir agregando o eliminando el libro que esté leyendo o haya leído. También podemos realizar un filtrado por número de páginas que tiene cada libro y otro por género, donde podemos elegír más de uno a la vez.'},
      {id: 4, name: 'Mapa', img: 'map.jpg',
      description: 'Aplicación creada con AngularJs, TypeScript y Angular Material donde utilizamos la API de Mapbox para obtener los datos del mapa. En ella podemos obtener una vista amplia de este, hacer zoom mediante una barra de progreso y marcadores, manteniendo la persistencia de datos de estos.'},
      {id: 5, name: 'Héroes', img: 'heroes-app.jpg',
      description: 'En este proyecto se realiza un CRUD completo de creación, lectura, edición y borrado de una lista de superhéroes. Además tenemos un sistema de registro y login para que cada usuario pueda tener los héroes que estime conveniente, haciendo uso de los "Guards" de Angular para la autenticación.'},
      {id: 6, name: 'Gifs', img: 'gif-app.jpg',
      description: 'Aplicación para la búsqueda de gifs mediante una API, obteniendo por un lado los resultados y por otro lado una lista donde se guardan dichas consultas en las que se mantiene una persistencia de datos por la cual si clicamos en alguna de ellas vuelve a hacer la petición a la API.'},
    ]},
    { language: 'en', title: 'Here you can see my projects:', list: [
      {id: 0, name: 'Clinicalia', img: 'clinicalia.png',
      description: 'Platform for registering physiotherapy clinics, professionals, and patients. We handle both registration, login, and appointment booking for both professionals and patients, implementing a payment gateway for the appointment.'},
      {id: 1, name: 'Interview-faqs', img: 'interview-faqs.png',
      description: 'Interview Faqs is a platform designed to address the most common theoretical questions in frontend developer job interviews, organized into three levels. We have included external links to learning resources for the technical aspects of these interviews'},
      {id: 2, name: 'My PortFolio', img: 'portfolio.png',
      description: 'This is my personal portfolio where i showcase the technologies i use, present a brief introduction about myself and include the projects i have worked on, whether individually or as part of a team. Additionally, you can contact me through the provided form or any other preferred method.'},
      {id: 3, name: 'Reading List', img: 'reading-list.png',
      description: 'A list of books with their corresponding reading list, which I can add or delete the book I am reading or have read. We can also filter by the number of pages each book has and another one by genre, in which we can choose more than one at a time.'},
      {id: 4, name: 'Map', img: 'map.jpg',
      description: 'Application created with AngularJs, TypeScript and Angular Material where we use the Mapbox API to get the map data. We can get a wide view of it, zoom through a progress bar and markers, keeping the data persistence of these.'},
      {id: 5, name: 'Heroes', img: 'heroes-app.jpg',
      description: "In this project we make a complete CRUD for creating, reading, editing and deleting a list of superheroes. We also have a registration and login system so that each user can have the heroes they want, using Angular's 'Guards' for authentication."},
      {id: 6, name: 'Gifs', img: 'gif-app.jpg',
      description: 'An application for the search of gifs through an API, obtaining on the one hand the results and on the other hand a list where these queries are stored in which we maintain the data persistence so that if we click on any of them, the request to the API is made again.'},
    ]}
  ];

  public currentProjectIndex: number = 0;
  public isPlaying: boolean = false;
  public interval: any;

  getProjectDisplayClass(projectId: number): string {
    return this.currentProjectIndex === projectId ? 'block' : 'none';
  }

  startSlideshow(): void {
    this.isPlaying = true;
    this.interval = setInterval(() => {
      if (this.isPlaying) {
        this.showNextProject();
      }
    }, 2000);
  }

  playPause(): void {
    this.isPlaying = !this.isPlaying;
    if (this.isPlaying) {
      this.startSlideshow();
    } else {
      clearInterval(this.interval);
    }
  }

  showNextProject(): void {
    const currentProjectList = this.projectsItems.find(item => item.language === this.getLanguage())?.list;
    if (currentProjectList) {
      this.currentProjectIndex = (this.currentProjectIndex + 1) % currentProjectList.length;
    }
  }

  showPreviousProject(): void {
    const currentProjectList = this.projectsItems.find(item => item.language === this.getLanguage())?.list;
    if (currentProjectList) {
    this.currentProjectIndex = (this.currentProjectIndex - 1 + currentProjectList.length) % currentProjectList.length;
    }
  }

  getLanguage(): string {
    return this.portfolioService.getLanguage();
  }

}
