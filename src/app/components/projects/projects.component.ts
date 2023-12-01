import { Component, inject } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio-service.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {

  private portfolioService = inject(PortfolioService);

  getLanguage(): string {
    return this.portfolioService.getLanguage();
  }
}
