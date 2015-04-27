// angular.module('myApp', ['gettext']);

angular.module('focusApp').run(function (gettextCatalog) {
   gettextCatalog.debug = true; // prepend MISSING if not translated
	gettextCatalog.setCurrentLanguage('fr-FR');
    
   
});
