angular.module('febworms').directive('febwormsPropertyFieldOptions', function(febwormsPropertyFieldOptionsLinkFn) {
  return {
    scope: true,
    controller: 'febwormsPropertyFieldOptionsController as optionsCtrl',
    templateUrl: 'febworms/edit/canvas/field/properties/options/options.tmpl.html',
    link: febwormsPropertyFieldOptionsLinkFn
  };
}).factory('febwormsPropertyFieldOptionsLinkFn', function() {
  return function($scope, $element, $attrs, ctrls) {
  };
});