export class myFormValidators{
	constructor(){ }
	
	static skuValidator(control) {  
		if (control.value && !control.value.match(/^[a-zA-Z]{1,100}$/)){  
			return {invalidSku: true};  
		}
	}
    
    static ageValidator(control) {  
		if (control.value && !control.value.match(/^[1,100]/)){  
			return {invalidSku: true};  
		}
	}
	
}