var resurrectionDirectives = angular.module('resurrectionDirectives', []);


resurrectionApp.directive('backButton', function(){
    return {
        restrict: 'A',
        
        link: function($scope, element, attrs) {
            element.bind('click', goBack);

            function goBack(){
                history.back();
            }
        }
    };
});
