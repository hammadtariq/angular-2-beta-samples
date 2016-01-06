import {Component, View} from "angular2/core";  
import {NgForm} from "angular2/common";  
import {ControlGroup,FormBuilder,Validators} from 'angular2/common';
import {myFormValidators} from './validators' 
@Component({  
  selector: 'my-app'
})  
@View({  
  directives: [],  
  template: `  
 <div>  
    <h2>Demo Form with custom validations</h2>  
    <form [ngFormModel]="myForm"  
          (submit)="onSubmit(myForm.value)">
 
      <div class="form-group"  
          [class.has-error]="!myForm.find('sku').valid && myForm.find('sku').touched">  
        <label for="skuInput">Name</label>  
        <input type="text"  
               class="form-control"  
               id="skuInput"  
               placeholder="enter your name"  
               #sku="ngForm"  
               [ngFormControl]="myForm.controls['sku']"
               >    
         <div *ngIf="sku.control.hasError('required') && sku.control.touched"  
           class="bg-warning">Name is required</div>  
           <div *ngIf="sku.control.hasError('invalidSku')"  
                        class="bg-warning">Name must be string</div>
      </div>
           
      <div class="form-group">  
        <label for="age">ABC</label>  
        <input type="text"  
                class="form-control"  
                id="age"  
                placeholder="enter your age"  
                [ngFormControl]="myForm.controls['ageC']"
                [(ngModel)]= 'age'
                #ageC="ngForm"
        >  
        <div *ngIf="ageC.control.hasError('invalidSku')"  
                        class="bg-warning">Age must be number</div>
      </div>     
             <div *ngIf="ageC.control.hasError('required') && ageC.control.touched"  
           class="bg-warning">age is required</div>  
           
      <div *ngIf="!myForm.valid"  
        class="bg-warning">Form is invalid</div>  
      <button type="submit" class="btn btn-default">Submit</button>  
    </form>  
    
    <table style="width:100%; border:1px solid green" *ngIf="!data.sku == '' ">
    <tr><td>Name: {{data.sku}}</td></tr>
    <tr><td>Age: {{data.ageC}}</td></tr>    
    </table>
  </div>   
  `
})   
export class DemoFormSkuBuilder {  
  myForm: ControlGroup; 
  data:any = {} 
  age:number = null;
  constructor(fb: FormBuilder) {  
   
    this.myForm = fb.group({  
      "sku":  ["", Validators.compose([  
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
