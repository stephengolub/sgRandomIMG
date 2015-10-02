angular.module('sg.images')

// Need to add full ngdocs, but a full example of usage would be:
//   <img src="..." sg-random-img="400,300"> // Generate random image with width 400 height 300
//   <img src="..." sg-random-img="400"> // Generate random image with width 400 height 400
//   <img src="..." sg-random-img> // Generate random image with default width 200 height 200
.directive('sgRandomImg', function (RandomImage) {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            var width = 200;
            var height = 200;

            var widthHeight = attrs.sgRandomImg;

            if (widthHeight) {
                var widthHeightSplit = widthHeight.split(',');

                if (widthHeightSplit.length > 0) {
                    var tempWidth = parseInt(widthHeightSplit[0], 10);
                    if (!isNaN(tempWidth)) {
                        width = tempWidth;
                    }

                    if (widthHeightSplit.length > 1) {
                        var tempHeight = parseInt(widthHeightSplit[1], 10);
                        if (!isNaN(tempHeight)) {
                            height = tempHeight;
                        }
                    }
                }
            }

            // This needs tested to match that it's getting set with the desired heights
            attrs.$set('src', RandomImage.buildRandomUrl(width, height));
        }
    };
});
