angular.module('febworms').directive('febwormsPropertyFieldOptions', function(febwormsPropertyFieldOptionsLinkFn) {
  return {
    scope: true,
    controller: 'febwormsPropertyFieldOptionsController as optionsCtrl',
    templateUrl: 'angular-febworms/edit/canvas/field/properties/options/options.ng.html',
    link: febwormsPropertyFieldOptionsLinkFn
  };
}).factory('febwormsPropertyFieldOptionsLinkFn', function() {
  return function($scope, $element, $attrs, ctrls) {

    $scope.multiple = false;

    $attrs.$observe('febwormsPropertyFieldOptions', function(value) {
      if(value === 'multiple') {
        $scope.multiple = true;
      }
    });
  };
});