describe('RandomImage Service', function () {
    var RandomImage, baseSrcList;

    var isValidURL = function (url, width, height) {
        var foundInList = false;

        baseSrcList.forEach(function (src) {
            var u = src.replace('{width}', width).replace('{height}', height);
            if (url === u) {
                foundInList = true;
            }
        });

        return foundInList;
    };

    beforeEach(function () {
        module('sg.images');

        inject(function ($injector) {
            RandomImage = $injector.get('RandomImage');
            baseSrcList = $injector.get('IMAGE_SRC_LIST');
        });
    });

    it('should generate a random url from list', function () {
        var url = RandomImage.buildRandomUrl(150, 250);

        expect(isValidURL(url, 150, 250)).to.be.true;
    });

    it('should generate a random url from list but square', function () {
        var url = RandomImage.buildRandomUrl(150);

        expect(isValidURL(url, 150, 150)).to.be.true;
    });

    it('should return ', function () {
        var url = RandomImage.buildRandomUrl();

        expect(isValidURL(url)).to.be.true;
    });
});
