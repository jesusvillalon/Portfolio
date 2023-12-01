import { Component, inject } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio-service.service';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  private portFolioService = inject(PortfolioService);

  getLanguage(): string {
    return this.portFolioService.getLanguage();
  }

  scrollToTop(){
    window.scrollTo({top: 0, behavior: 'smooth'});
  }

}
