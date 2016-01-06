System.register(['angular2/platform/browser', './app', 'ng2-material/all'], function(exports_1) {
    var browser_1, app_1, all_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (app_1_1) {
                app_1 = app_1_1;
            },
            function (all_1_1) {
                all_1 = all_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_1.AppComponent, [all_1.MATERIAL_PROVIDERS])
                .catch(function (err) { return console.error(err); });
        }
    }
});
//# sourceMappingURL=boot.js.map