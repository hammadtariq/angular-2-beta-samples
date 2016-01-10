export class myFormValidators{
	constructor(){ }
	
	static skuValidator(control) {  
		if (control.value && !control.value.match(/^[a-zA-Z]*$/)){  
			return {invalidSku: true};  
		}
	}
    
    static ageValidator(control) {  
		if (control.value && !control.value.match(/^[0-9]*$/)){  
			return {invalidSku: true};  
		}
	}
	
}