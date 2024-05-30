import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent{
  supportedLanguages: string[] = ['en', 'fr', 'ar'];

  constructor(private translate: TranslateService) {
    this.translate.addLangs(this.supportedLanguages);
    this.translate.setDefaultLang('en');

    const browserLang = this.translate.getBrowserLang() || 'en';
    this.translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
  }

 
  selectLang(event: Event) {
    const target = event.target as HTMLSelectElement;
    const language = target.value;
    this.translate.use(language);
  }
}