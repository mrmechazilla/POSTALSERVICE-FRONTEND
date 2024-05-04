import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent{
  supportedLanguages = ['en', 'fr', 'ar'];

  /* constructor(public translateService: TranslateService, private languageService: LanguageService){
    this.translateService.addLangs(this.supportedLanguages);
    this.translateService.setDefaultLang('en');
    
    const storedLanguage = this.languageService.getLanguage();
    const browserLanguage = this.translateService.getBrowserLang() || 'en';
    const selectedLanguage = storedLanguage || browserLanguage;

    this.translateService.use(selectedLanguage);
  }
 */
  selectLang(event: Event){
    //const lang = (event.target as HTMLInputElement).value;
    //this.translateService.use(lang);
    //this.languageService.setLanguage(lang);
  }
}