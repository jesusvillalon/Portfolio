import { Component, inject } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio-service.service';

interface Skill {
  name: string;
  img: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  private portfolioService = inject(PortfolioService);

  public hardSkillsImg: Skill[] = [
    {name: 'Html', img: "../../../assets/logos/html.svg"},
    {name: 'Css', img: "../../../assets/logos/css.svg"},
    {name: 'JavaScript', img: "../../../assets/logos/javascript.svg"},
    {name: 'Angular', img: "../../../assets/logos/angular.svg"},
    {name: 'React', img: "../../../assets/logos/react.svg"},
    {name: 'TypeScript', img: "../../../assets/logos/typescript.svg"},
    {name: 'Node', img: "../../../assets/logos/node.svg"},
    {name: 'Npm', img: "../../../assets/logos/npm.svg"},
    {name: 'Express', img: "../../../assets/logos/express.svg"},
    {name: 'MySQL', img: "../../../assets/logos/mysql.svg"},
    {name: 'Git', img: "../../../assets/logos/git.svg"},
    {name: 'Github', img: "../../../assets/logos/github.svg"},
  ]

  getLanguage(): string{
    return this.portfolioService.getLanguage();
  }

}
