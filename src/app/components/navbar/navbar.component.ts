import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{
  supportedLanguages: string[] = ['en', 'fr', 'ar'];
  currentLanguage!: string;
  darkMode = true;

  constructor(private languageService: LanguageService, private themeService: ThemeService){}

  ngOnInit() {
    this.currentLanguage = this.languageService.getCurrentLanguage();
    this.darkMode = this.themeService.isDarkMode();
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
    this.darkMode = this.themeService.isDarkMode();
  }

  selectLang(event: any) {
    this.languageService.setLanguage(event.target.value);
  }
}