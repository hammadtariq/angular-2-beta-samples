System.register([], function(exports_1) {
    var myFormValidators;
    return {
        setters:[],
        execute: function() {
            myFormValidators = (function () {
                function myFormValidators() {
                }
                myFormValidators.skuValidator = function (control) {
                    if (control.value && !control.value.match(/^[a-zA-Z]{1,100}$/)) {
                        return { invalidSku: true };
                    }
                };
                myFormValidators.ageValidator = function (control) {
                    if (control.value && !control.value.match(/^[1,100]/)) {
                        return { invalidSku: true };
                    }
                };
                return myFormValidators;
            })();
            exports_1("myFormValidators", myFormValidators);
        }
    }
});
//# sourceMappingURL=validators.js.map