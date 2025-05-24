/* import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Language } from '../dtos/language';

@Injectable({
    providedIn: 'root'
  })
  export class LanguageService {
    supportedLanguages: Language[] = [
      {code: "en", label: "english"}, 
      {code: "fr", label: "french"},
      {code: "ar", label: "arabic"}
    ];
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
    
      // Set the text direction based on language
      const htmlTag = document.documentElement;
      htmlTag.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    }
  
    getSavedLanguage(): string | null {
      return localStorage.getItem(this.storageKey);
    }

    getCurrentLanguage(): string {
      return this.getSavedLanguage() || this.defaultLang;
    }
  
  } */