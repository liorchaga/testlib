'use strict';

// Set the jasmine fixture path
// jasmine.getFixtures().fixturesPath = 'base/';

describe('MyLibrary', function() {

    var module;
    var dependencies;
    dependencies = [];

    var hasModule = function(module) {
        return dependencies.indexOf(module) >= 0;
    };

    beforeEach(function() {

        // Get module
        module = angular.module('MyLibrary');
        dependencies = module.requires;
    });

    it('should load config module', function() {
        expect(hasModule('MyLibrary.config')).toBeTruthy();
    });

    
    it('should load filters module', function() {
        expect(hasModule('MyLibrary.filters')).toBeTruthy();
    });
    

    
    it('should load directives module', function() {
        expect(hasModule('MyLibrary.directives')).toBeTruthy();
    });
    

    
    it('should load services module', function() {
        expect(hasModule('MyLibrary.services')).toBeTruthy();
    });
    

});
