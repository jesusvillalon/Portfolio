import { Component, inject } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio-service.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent {

  private portfolioService = inject(PortfolioService);

  getLanguage(): string {
    return this.portfolioService.getLanguage();
  }

}
