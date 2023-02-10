import { Component, OnInit } from '@angular/core';
import { Configuration, OpenAIApi } from 'openai';
import { environment } from 'src/environments/environment';
import { gptModels } from '../models/constants';
import { ChatWithBot, ResponseModel } from '../models/gpt-response';
import {formatDate } from '@angular/common';

@Component({
  selector: 'app-image-generator',
  templateUrl: './image-generator.component.html',
  styleUrls: ['./image-generator.component.css']
})
export class ImageGeneratorComponent implements OnInit {

      promptText = '';
      imageUrl:any;
      showSpinner = false;
    
    ngOnInit(): void {
    }
  
    checkResponse() {
      this.invokeGPT();
    }
  

  

  
    async invokeGPT() {
     
  
      try{

        let configuration = new Configuration({apiKey: environment.apiKey});
        let openai = new OpenAIApi(configuration);

        this.showSpinner = true;
        const response = await openai.createImage({
          prompt: this.promptText,
          n: 1,
          size: "256x256",
        });
       
        this.imageUrl = response.data.data[0].url;
        this.showSpinner = false;
      }catch(error:any) {
        this.showSpinner = false;
        // Consider adjusting the error handling logic for your use case
        if (error.response) {
          console.error(error.response.status, error.response.data);
          
        } else {
          console.error(`Error with OpenAI API request: ${error.message}`);
          
        }
      }
    }
}
