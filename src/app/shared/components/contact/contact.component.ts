import { Component, inject } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio-service.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  private portFolioService = inject(PortfolioService);

  getLanguage(): string {
    return this.portFolioService.getLanguage();
  }
}

