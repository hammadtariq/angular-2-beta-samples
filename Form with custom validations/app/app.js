System.register(["angular2/core", 'angular2/common', './validators'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, validators_1;
    var DemoFormSkuBuilder;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (validators_1_1) {
                validators_1 = validators_1_1;
            }],
        execute: function() {
            DemoFormSkuBuilder = (function () {
                function DemoFormSkuBuilder(fb) {
                    this.data = {};
                    this.age = null;
                    this.myForm = fb.group({
                        "sku": ["", common_1.Validators.compose([
                                common_1.Validators.required, validators_1.myFormValidators.skuValidator])],
                        "ageC": ["", common_1.Validators.compose([
                                common_1.Validators.required, validators_1.myFormValidators.ageValidator])]
                    });
                }
                DemoFormSkuBuilder.prototype.onSubmit = function (value) {
                    this.data = value;
                    console.log('you submitted value: ', value);
                    console.log('you submitted value: ', this.age);
                };
                DemoFormSkuBuilder = __decorate([
                    core_1.Component({
                        selector: 'my-app'
                    }),
                    core_1.View({
                        directives: [],
                        template: "  \n <div>  \n    <h2>Demo Form with custom validations</h2>  \n    <form [ngFormModel]=\"myForm\"  \n          (submit)=\"onSubmit(myForm.value)\">\n \n      <div class=\"form-group\"  \n          [class.has-error]=\"!myForm.find('sku').valid && myForm.find('sku').touched\">  \n        <label for=\"skuInput\">Name</label>  \n        <input type=\"text\"  \n               class=\"form-control\"  \n               id=\"skuInput\"  \n               placeholder=\"enter your name\"  \n               #sku=\"ngForm\"  \n               [ngFormControl]=\"myForm.controls['sku']\"\n               >    \n         <div *ngIf=\"sku.control.hasError('required') && sku.control.touched\"  \n           class=\"bg-warning\">Name is required</div>  \n           <div *ngIf=\"sku.control.hasError('invalidSku')\"  \n                        class=\"bg-warning\">Name must be string</div>\n      </div>\n           \n      <div class=\"form-group\">  \n        <label for=\"age\">ABC</label>  \n        <input type=\"text\"  \n                class=\"form-control\"  \n                id=\"age\"  \n                placeholder=\"enter your age\"  \n                [ngFormControl]=\"myForm.controls['ageC']\"\n                [(ngModel)]= 'age'\n                #ageC=\"ngForm\"\n        >  \n        <div *ngIf=\"ageC.control.hasError('invalidSku')\"  \n                        class=\"bg-warning\">Age must be number</div>\n      </div>     \n             <div *ngIf=\"ageC.control.hasError('required') && ageC.control.touched\"  \n           class=\"bg-warning\">age is required</div>  \n           \n      <div *ngIf=\"!myForm.valid\"  \n        class=\"bg-warning\">Form is invalid</div>  \n      <button type=\"submit\" class=\"btn btn-default\">Submit</button>  \n    </form>  \n    \n    <table style=\"width:100%; border:1px solid green\" *ngIf=\"!data.sku == '' \">\n    <tr><td>Name: {{data.sku}}</td></tr>\n    <tr><td>Age: {{data.ageC}}</td></tr>    \n    </table>\n  </div>   \n  "
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder])
                ], DemoFormSkuBuilder);
                return DemoFormSkuBuilder;
            })();
            exports_1("DemoFormSkuBuilder", DemoFormSkuBuilder);
        }
    }
});
//# sourceMappingURL=app.js.map