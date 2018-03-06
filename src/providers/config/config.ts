import { Injectable } from '@angular/core';

const configKey = "config";

@Injectable()
export class ConfigProvider {


  constructor() {
    console.log('Hello MoovieProvider Provider');
  }

  getConfigData():any{
    return JSON.parse(localStorage.getItem(configKey));
  }

  setConfigData(showSlide: boolean, username: string, name: string){
    let config = {
      showSlide: false,
      username: "",
      name: ""
    }

    if(showSlide){
      config.showSlide = showSlide;
    }

    
    if(username){
      config.username = username;
    }

        
    if(name){
      config.name = name;
    }

    localStorage.setItem(configKey, JSON.stringify(config));


  }

}
