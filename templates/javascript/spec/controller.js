'use strict';

describe('Controller: <%= classedName %>Ctrl', function () {

    var <%= classedName %>Ctrl, scope;

    beforeEach(function () {

        module('<%= scriptAppName %>');

        inject(function ($controller, $rootScope) {
            scope = $rootScope.$new();
            <%= classedName %>Ctrl = $controller('<%= classedName %>Ctrl', {
                $scope: scope,
                init: 'DATA'
            });
        });
    });

    it('should attach init data to scope', function () {
        expect(scope.data).toEqual('DATA');
    });
});

describe('Service: <%= classedName %>CtrlInit', function () {

    var <%= classedName %>CtrlInit;

    beforeEach(function () {

        module('<%= scriptAppName %>');

        inject(function (_<%= classedName %>CtrlInit_) {
            <%= classedName %>CtrlInit = _<%= classedName %>CtrlInit_;
        });

    });


    it('should have a prepare function', function () {
        expect(typeof <%= classedName %>CtrlInit.prepare).toEqual('function');
    });

});