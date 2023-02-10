import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Configuration, OpenAIApi } from 'openai';
import { environment } from 'src/environments/environment';
import { gptModels } from '../models/constants';
import { ChatWithBot, ResponseModel, editResponseModel } from '../models/gpt-response';
import {formatDate } from '@angular/common';
import { AppService } from '../app.service';

@Component({
  selector: 'app-customer-support',
  templateUrl: './customer-support.component.html',
  styleUrls: ['./customer-support.component.css'],
})
export class CustomerSupportComponent implements OnInit {
chatConversation: ChatWithBot[]=[];
response!: ResponseModel | undefined ;
    gptModels = gptModels
    promptText = '';
    
    showSpinner = false;
    today= new Date();
    jstoday = '';
    option:any;
    public toggleButton: any = {};
    enable(){
      this.toggleButton = !this.toggleButton
   }
   disable(){
    this.toggleButton = true
 }

    constructor(private data: AppService) {
      this.jstoday = formatDate(this.today, 'dd-MM-yyyy | hh:mm a', 'en-US', '+0530');
    }
  ngOnInit(): void {
    this.data.currentOption.subscribe(message => this.option = message)
  }

  checkResponse() {
    this.pushChatContent(this.promptText,'you','person','https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp');
    this.invokeGPT();
    console.log(this.chatConversation)
  }


  pushChatContent(content:string, person:string, cssClass:string, image:string) {
    const chatToPush: ChatWithBot = { person:person, response:content, cssClass:cssClass, image:image};
    this.chatConversation.push(chatToPush);
  }


  getText(data:string) {
    return data.split('\n').filter(f=>f.length>0);
  }

  async invokeGPT() {
   

    if(this.promptText.length<2)
    return;

    

    try{
      this.response = undefined;
      let configuration = new Configuration({apiKey: environment.apiKey});
      let openai = new OpenAIApi(configuration);

      let reqData = { ...this.option, prompt: this.promptText };

      this.showSpinner = true;
      let apiResponse =  await openai.createCompletion(reqData);

      
      this.response = apiResponse.data as ResponseModel;
      this.pushChatContent(this.response.choices[0].text.trim(),'bot','bot','https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp');

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

  checkEditResponse(index:any){
    console.log(index)
 
    this.promptText = this.chatConversation[index].response 
    this.invokeGPT();
    let newChat;
    // if(index == 0){
    //    newChat = this.chatConversation.slice(0,)
    // }
    // else{
      
    // }
    newChat = this.chatConversation.slice(0,index+1)
    this.chatConversation=[];
    this.chatConversation.push(...newChat);
    console.log(this.chatConversation)
    this.toggleButton[index] = false;
  }

  // async callEditApi() {
   


    

  //   try{
  //     console.log("hi")
  //     this.response = undefined;
  //     let configuration = new Configuration({apiKey: environment.apiKey});
  //     let openai = new OpenAIApi(configuration);

  //     let reqData = { 
  //       model: "text-davinci-edit-001",
  //       input: "What day of the wek is it?",
  //       instruction: "",
  //       n:4
  //     };

  //     this.showSpinner = true;
  //     let apiResponse =  await openai.createEdit(reqData);

  //     this.response = apiResponse.data as editResponseModel;
  //    // this.pushChatContent(this.response.choices[0].text.trim(),'bot','bot','https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp');
  //    console.log(this.response)
  //     this.showSpinner = false;
  //   }catch(error:any) {
  //     this.showSpinner = false;
  //     // Consider adjusting the error handling logic for your use case
  //     if (error.response) {
  //       console.error(error.response.status, error.response.data);
        
  //     } else {
  //       console.error(`Error with OpenAI API request: ${error.message}`);
        
  //     }
  //   }
  // }
}
