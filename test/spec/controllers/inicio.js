'use strict';

describe('Controller: InicioCtrl', function () {

  // load the controller's module
  beforeEach(module('xjapanApp'));

  var InicioCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    InicioCtrl = $controller('InicioCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(true).toBe(true);
  });
});
