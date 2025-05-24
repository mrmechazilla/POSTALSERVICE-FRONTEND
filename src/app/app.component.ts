import { Component, OnInit } from '@angular/core';
import { ThemeService } from './services/theme.service';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BidiModule } from '@angular/cdk/bidi';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: true,
    imports: [NavbarComponent, RouterOutlet]
})
export class AppComponent implements OnInit {
  darkMode = true;
  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.darkMode = this.themeService.isDarkMode();
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
    this.darkMode = this.themeService.isDarkMode();
  }
}