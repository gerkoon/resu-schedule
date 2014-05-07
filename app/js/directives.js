var resurrectionDirectives = angular.module('resurrectionDirectives', []);


resurrectionApp.directive('backButton', function(){
    // Runs during compile
    return {
        restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
        
        link: function($scope, element, attrs) {
            element.bind('click', goBack);

            function goBack(){
                history.back();
                scope.$apply();
            }
            
        }
    };
});