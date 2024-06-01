import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';


@Injectable({
    providedIn: 'root'
  })
  export class LanguageService {
    private defaultLang: string = 'en';
    private storageKey: string = 'selectedLanguage';

    constructor(private translate: TranslateService) {
      this.translate.addLangs(['en', 'fr']);
      this.translate.setDefaultLang(this.defaultLang);
  
      const savedLang = this.getSavedLanguage();
      const browserLang = this.translate.getBrowserLang() || this.defaultLang;
      this.translate.use(savedLang ?? (browserLang.match(/en|fr/) ? browserLang : this.defaultLang));
    }

    setLanguage(lang: string) {
      this.translate.use(lang);
      localStorage.setItem(this.storageKey, lang);
    }
  
    getSavedLanguage(): string | null {
      return localStorage.getItem(this.storageKey);
    }

    getCurrentLanguage(): string {
      return this.getSavedLanguage() || this.defaultLang;
    }
  
  }