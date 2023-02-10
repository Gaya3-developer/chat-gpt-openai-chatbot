import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AppService {
  initialOption = {
    model: "text-davinci-003",
    temperature: 0,
    max_tokens: 100,
    top_p: 1,
    frequency_penalty: 0.0,
    presence_penalty: 0.0,
  }
  private options = new BehaviorSubject(this.initialOption);
  currentOption = this.options.asObservable();

  constructor() { 
  }

  setOption(option:any) {
    this.options.next(option)
    
  }
}
