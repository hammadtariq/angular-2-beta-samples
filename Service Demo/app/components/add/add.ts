import {Component} from 'angular2/core';
import {NgForm} from 'angular2/common';
import {HelloService} from '../../services/helloService';
@Component({
    selector: 'add',
    templateUrl:'./app/components/add/add.html',
    providers:[HelloService]
})
export class AddComponent { 
    result:number;
    constructor(private helloService:HelloService){}
    
    getAddResult(data){
       this.result = this.helloService.add(data.num1,data.num2); 
       return this.result;
    }
}