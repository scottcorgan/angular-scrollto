(function () {
  'use strict';

  angular.module('scrollto', [])
      .provider('scrollToConfig', scrollToConfig)
      .directive('scrollTo', scrollTo);

  function scrollToConfig() {
    this.config = {container: 'html, body', offset: 0, duration: 150};
    this.$get = function () { return {config: this.config}; };
  }

  scrollTo.$inject = ['$timeout', 'scrollToConfig'];

  function scrollTo($timeout, scrollToConfig) {
    return {restrict: 'A', link: link};

    function link(scope, element, attrs) {
      var settings = angular.extend(
          {scrollTo: angular.element(), easing: 'swing'},
          scrollToConfig.config, attrs);
      element.on('click', function () { $timeout(scroll(settings)); });

      // Hook to trigger the scrolling action outside of the target element (e.g. can call from a Controller)
      scope.triggerScroll = function(delay) {
        delay = delay || 0; // delay is optional
        $timeout(scroll(settings), delay);
      };
    }

    function scroll (settings) {
      return function () {
        var scrollPane = angular.element(settings.container);
        var scrollTo = (typeof settings.scrollTo == "number") ? settings.scrollTo : angular.element(settings.scrollTo);
        if (typeof scrollTo.offset() == 'undefined') { return; } // element no longer available
        var scrollY = (typeof scrollTo == "number") ? scrollTo : scrollTo.offset().top - settings.offset;
        scrollPane.animate({scrollTop : scrollY }, settings.duration, settings.easing, function(){
          if (typeof callback == 'function') { callback.call(this); }
        });
      }
    }
  }
})();