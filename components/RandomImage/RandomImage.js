angular.module('sg.images')

// Need to add full ngdocs. Example Usage would be:
//
// RandomImage.buildRandomUrl(200); // Returns image url for 200 square
// RandomImage.buildRandomUrl(200, 300); // Returns image url for 300 square
// RandomImage.buildRandomUrl(); // Returns empty string
//
.factory('RandomImage', function (IMAGE_SRC_LIST) {
    var srcList = IMAGE_SRC_LIST;

    if (!_.isArray(srcList)) {
        srcList = [srcList];
    }

    var getRandomIndex = function () {
        if (srcList.length > 0) {
            return Math.floor((Math.random() * srcList.length));
        } else {
            return -1;
        }
    };

    var getRandomSourceURL = function () {
        var randomIndex = getRandomIndex();

        if (randomIndex >= 0) {
            return srcList[randomIndex];
        }
    };

    var RandomImage = {
        buildRandomUrl: function (width, height) {
            // We're going to default to a square if no height is passed
            if (height === undefined) {
                height = width;
            }

            var url = getRandomSourceURL();

            return url.replace('{width}', width).replace('{height}', height);
        }
    };

    return RandomImage;
});
