import {Injectable} from 'angular2/core';

@Injectable()
export class HelloService { 
    constructor(){
        
    }
    
    add(num1,num2){
        return num1+num2;
    }
}
