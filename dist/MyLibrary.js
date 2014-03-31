(function(window, document) {

// Create all modules and define dependencies to make sure they exist
// and are loaded in the correct order to satisfy dependency injection
// before all nested files are concatenated by Grunt

// Config
angular.module('MyLibrary.config', [])
    .value('MyLibrary.config', {
        debug: true
    });

// Modules
angular.module('MyLibrary.directives', []);
angular.module('MyLibrary.filters', []);
angular.module('MyLibrary.services', []);
angular.module('MyLibrary',
    [
        'MyLibrary.config',
        'MyLibrary.directives',
        'MyLibrary.filters',
        'MyLibrary.services',
        'ngResource',
        'ngCookies',
        'ngSanitize'
    ]);
})(window, document);