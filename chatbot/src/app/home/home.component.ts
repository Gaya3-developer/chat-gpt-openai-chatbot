import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { AIOptions } from '../models/AIOptions';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  AIOptions = AIOptions
  option={};

  constructor(private data: AppService) { }

  ngOnInit(): void {
    this.data.currentOption.subscribe(option => this.option = option)
    
  }
  selectOption(option:any){
    this.data.setOption(option)
    
  }
}
