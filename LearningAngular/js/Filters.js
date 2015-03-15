"use strict";

LearnAngJs.filter('duration', function () {
    return function (duration) {

        switch (duration) {

            case 1:
                return "One Hour";
            case 2:
                return "Four Hour";
            case 3:
                return "Ten Hour";
        }
    }

})