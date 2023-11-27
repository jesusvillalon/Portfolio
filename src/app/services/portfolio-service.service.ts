import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  private language = 'es';
  private isLanguageChanging: boolean = false;


  constructor() {
    const savedLanguage = localStorage.getItem('selectedLanguage');
    if(savedLanguage){
      this.language = savedLanguage;
    }
  }

  getLanguage(): string {
    return this.language;
  }

  toggleLanguage(): void {
    if (!this.isLanguageChanging) {
      this.isLanguageChanging = true;
      this.language = this.language === 'es' ? 'en' : 'es';
      localStorage.setItem('selectedLanguage', this.language);
    }
    this.isLanguageChanging = false;
  }




}
