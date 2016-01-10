import {Component, View} from "angular2/core";  
import {NgForm} from "angular2/common";  
import {ControlGroup,FormBuilder,Validators} from 'angular2/common';
import {myFormValidators} from './validators' 
@Component({  
  selector: 'my-form'
})  
@View({  
  templateUrl:'./app/app.html'  
})   
export class DemoFormSkuBuilder {  
  myForm: ControlGroup; 
  data:any = {} 
  age:number = null;
  constructor(fb: FormBuilder) {  
   
    this.myForm = fb.group({  
      "name":  ["", Validators.compose([  
        Validators.required, myFormValidators.skuValidator])],
       "ageC": ["", Validators.compose([  
        Validators.required, myFormValidators.ageValidator])]
    });
 
  }

  onSubmit(value) {  
      this.data = value
    console.log('you submitted value: ', value);  
    console.log('you submitted value: ', this.age);  
  }
}
