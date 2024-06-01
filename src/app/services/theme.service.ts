// src/app/theme.service.ts

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private darkMode = false;

  constructor() {
    const savedTheme = localStorage.getItem('dark-mode');
    if (savedTheme) {
      this.darkMode = JSON.parse(savedTheme);
      this.updateTheme();
    }
  }

  toggleTheme(): void {
    this.darkMode = !this.darkMode;
    this.updateTheme();
    localStorage.setItem('dark-mode', JSON.stringify(this.darkMode));
  }

  isDarkMode(): boolean {
    return this.darkMode;
  }

  private updateTheme(): void {
    if (this.darkMode) {
      document.body.classList.add('dark-mode');
      document.body.classList.remove('light-mode');
    } else {
      document.body.classList.remove('dark-mode');
      document.body.classList.remove('dark-mode');
    }
  }
}
