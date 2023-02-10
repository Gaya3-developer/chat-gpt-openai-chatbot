import {Component, OnInit} from '@angular/core';
import { ThemeService } from './theme/theme.service';

@Component({selector: 'app-root', templateUrl: './app.component.html', styleUrls: ['./app.component.css']})
export class AppComponent implements OnInit{

  response: any;
  themeToggleText: string = 'light';
  constructor(
  private themeService: ThemeService
  ) {

  }
  ngOnInit(): void {
    //this.tryCall();
    this.themeService.setDarkTheme();
  }

    title = 'chatGPTWithAngular';

    setLightbulb() {
      if (this.themeService.isDarkTheme()) {
        this.themeToggleText = 'light';
      } else {
        this.themeToggleText = 'dark';
      }
    }
    toggleTheme() {
      if (this.themeService.isDarkTheme()) {
        this.themeService.setLightTheme();
      } else {
        this.themeService.setDarkTheme();
      }
  
      this.setLightbulb();
    }
   
}

