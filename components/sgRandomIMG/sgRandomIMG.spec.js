describe('sgRandomIMG Directive', function () {
    var el, scope, compile, elScope, validTemplate;

    var compilePage = function (width, height) {
        validTemplate = '<img sg-random-img';
        var s = '';

        if (width || height) {
            s = '="' + width;

            if (height) {
                s += ',' + height;
            }

            s += '"';
        }

        validTemplate += s + '>';

        el = helpers.createDirective(validTemplate, compile, scope);

        elScope = el.isolateScope();
    };

    beforeEach(function () {
        module('sg.images');

        // Inject in angular constructs
        inject(function ($rootScope, $compile) {
            scope = $rootScope.$new();
            compile = $compile;
        });

        compilePage();
    });

    afterEach(function () {
        // zero out element
        el = null;
    });

    it('should load the defaults', function () {
        expect(el.attr('src')).to.contain('http');
        expect(el.attr('src')).to.contain('200/200');
    });

    it('should make a square', function () {
        compilePage(150);
        expect(el.attr('src')).to.contain('150/150');
    });

    it('should make explicit width and height', function () {
        compilePage(450, 250);
        expect(el.attr('src')).to.contain('450/250');
    });
});
